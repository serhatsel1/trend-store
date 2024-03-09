import PropTypes from "prop-types";

import "./CartItem.css";

const CartItem = ({ product }) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
          <div>
            <span>{product.price} x</span>
            <span>{product.amount}</span>
          </div>
        </div>
        <a href="/" className="cart-item-remove">
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
