import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const currItem = state.items[itemIndex];
    if (currItem) {
      const updatedItem = {
        ...currItem,
        qty: currItem.qty++,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = [{ ...state.items }, action.item];
    }
    const updatedPrice = state.totalPrice + action.item.price * action.item.qty;
    return {
      items: updatedItems,
      totalPrice: updatedPrice,
    };
  }
  if (action.type === "REMOVE") {
  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
