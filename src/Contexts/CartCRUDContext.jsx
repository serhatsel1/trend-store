import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const CartCRUDContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      return state;
    case "CLEAR":
      return state;
    default:
      return state;
  }
};
export const CartCRUDProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
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
