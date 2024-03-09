import { createContext } from "react";
import PropTypes from "prop-types";

export const CartCRUDContext = createContext();

export const CartCRUDProvider = ({ children }) => {
  const value = {
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
  };

  return (
    <CartCRUDContext.Provider value={value}>
      {children}
    </CartCRUDContext.Provider>
  );
};

CartCRUDProvider.propTypes = {
  children: PropTypes.node,
};
