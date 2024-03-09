import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartShowContext } from "../../Contexts/CartShowContext";
import { CartCRUDContext } from "../../Contexts/CartCRUDContext";

const HeaderCartButton = () => {
  const CartContext = useContext(CartShowContext);
  const CartCRUDCtx = useContext(CartCRUDContext);

  const { cartIsShow, setCartIsShow } = CartContext;

  const { items } = CartCRUDCtx;
  const totalItems = items.reduce((prev, current) => {
    return prev + current.amount;
  }, 0);
  return (
    <button className="button" onClick={() => setCartIsShow(!cartIsShow)}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
