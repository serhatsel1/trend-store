import "./Products.css";
import products from "../productData";
import ProductItem from "./ProductItem";

const Products = () => {
  console.log(products)
  return (
    <main className="produccts-wrapper">
      <ul className="products">
        <ProductItem />
      </ul>
    </main>
  );
};

export default Products;
