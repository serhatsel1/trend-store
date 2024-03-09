import "./Products.css";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <main className="produccts-wrapper">
      <ul className="products">
        <ProductItem />
      </ul>
    </main>
  );
};

export default Products;
