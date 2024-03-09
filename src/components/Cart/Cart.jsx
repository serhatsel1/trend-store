import CartItem from "./CartItem";
import { CartShowContext } from "../../Contexts/CartShowContext";
import { useContext } from "react";
import OffCanvas from "../UI/OffCanvas";
import "./Cart.css";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";

const Cart = () => {
  const CartContext = useContext(CartShowContext);
  const { setCartIsShow } = CartContext;

  const CartCrudCtx = useContext(CartCRUDContext);
  const { items, totalAmount } = CartCrudCtx;

  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  const onClose = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  return (
    <OffCanvas>
      <>
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>{totalAmount.toFixed(2)} ₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear">Sepeti Temizle</button>
        </div>
      </>
    </OffCanvas>
  );
};

export default Cart;
