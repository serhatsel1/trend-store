import { useContext, useState } from "react";
// import products from "../productData";

import "./ProductItem.css";
import Rating from "./Rating";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";

const ProductItem = () => {
  // const productList = products;

  const cartCrudCtx = useContext(CartCRUDContext);

  const { addItem } = cartCrudCtx;

  const [products, setProucts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProductHandler = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );
      if (res.status !== 200) {
        throw new Error("something went wrong");
      }
      console.log(res);
      const data = await res.json();

      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          ...item,
        };
      });

      setProucts(newData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  let content = "fetch api";
  if (isLoading) {
    return (content = "Loading...");
  }
  return (
    <>
      {products?.map((product, i) => (
        <li className="card" key={i}>
          <img src={product.img} alt={product.name} />
          <h3 className="product-title">{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-info">
            <Rating />
            <span className="price">{product.price}₺</span>
          </div>
          <button className="add-to-cart" onClick={() => addItem(product)}>
            Sepete Ekle
          </button>
        </li>
      ))}
      {error && <p>{error}</p>}
      <button className="button" onClick={fetchProductHandler}>
        {content}
      </button>
    </>
  );
};

export default ProductItem;
