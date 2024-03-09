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
        updatedItems.push(action.item); // Concatenate the new item to the existing items array
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      // Implement remove logic here
      return state;
    case "CLEAR":
      // Implement clear logic here
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
