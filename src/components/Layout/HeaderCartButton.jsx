import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartShowContext } from "../../Contexts/CartShowContext";

const HeaderCartButton = () => {
  const CartContext = useContext(CartShowContext);

  const { cartIsShow, setCartIsShow } = CartContext;
  console.log("cartContext", CartContext);

  return (
    <button className="button" onClick={() => setCartIsShow(!cartIsShow)}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
