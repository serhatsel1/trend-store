import PropTypes from "prop-types";

import "./CartItem.css";
import { useContext } from "react";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";

const CartItem = ({ product }) => {
  const { removeItem, items } = useContext(CartCRUDContext);

  console.log("items", items);
  console.log("product", product.id);

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
          <div>
            <span>{product.price} x </span>
            <span className="cart-item-amount">{product.amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            removeItem(product.id);
            e.preventDefault();
          }}
        >
          x
        </a>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
