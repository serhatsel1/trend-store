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
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let updatedItems = [...state.items];
      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      const filteredItem = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItem,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };

    case "CLEAR":
      return { items: [], totalAmount: 0 };
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
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
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
