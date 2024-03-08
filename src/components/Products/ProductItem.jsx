import products from "../productData";

import "./ProductItem.css"
import Rating from "./Rating";

const ProductItem = () => {
  const productList = products;

  console.log(productList[0].name);

  return (
    <>
      {productList?.map((product) => (
        <li className="card" key={product?.id}>
          <img src={product.img} alt={product.name} />
          <h3 className="product-title">{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-info">
            <Rating/>
            <span className="price">{product.price}₺</span>
          </div>
          <button className="add-to-cart">Sepete Ekle</button>
        </li>
      ))}
    </>
  );
};

export default ProductItem;
