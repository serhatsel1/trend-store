import CartItem from "./CartItem";
import OffCanvas from "../UI/OffCanvas";
import { CartShowContext } from "../../Contexts/CartShowContext";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const CartContext = useContext(CartShowContext);
  const { setCartIsShow } = CartContext;

  const CartCrudCtx = useContext(CartCRUDContext);
  const { items, totalAmount ,clearItem} = CartCrudCtx;
  const hasItems = items.length > 0;

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
          <span>{totalAmount} ₺</span>
        </div>
        {hasItems && (
          <div className="actions">
            <button className="cart-order">Sipariş Ver</button>
            <button className="cart-clear" onClick={() => clearItem()}>Sepeti Temizle</button>
          </div>
        )}
      </>
    </OffCanvas>
  );
};

export default Cart;
