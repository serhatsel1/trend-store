import { createContext, useState } from "react";
import PropTypes from "prop-types"
import Cart from "../components/Cart/Cart";

export const CartShowContext = createContext();

export const CartShowProvide = ({ children }) => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const value = {
    cartIsShow,
    setCartIsShow,
  };

  return (
    <CartShowContext.Provider value={value}>
      {children}
      {cartIsShow && <Cart />}
    </CartShowContext.Provider>
  );
};
CartShowProvide.propTypes = {
  children: PropTypes.node,
};