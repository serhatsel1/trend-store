import { useContext } from "react";
import products from "../productData";

import "./ProductItem.css";
import Rating from "./Rating";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";

const ProductItem = () => {
  const productList = products;

  const cartCrudCtx = useContext(CartCRUDContext);

  const { addItem } = cartCrudCtx;
  return (
    <>
      {productList?.map((product) => (
        <li className="card" key={product?.id}>
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
    </>
  );
};

export default ProductItem;
