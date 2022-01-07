import Header from "./components/Layout/Header";
import Cart from "./components/shop/Cart";
import Shop from "./components/shop/Shop";
import CartProvider from "./store/CartProvider";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const clickHandler = (product) => {
    let itemIndex = items.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      setItems([...items, { ...product, qty: 1 }]);
    } else {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...product, qty: items[itemIndex].qty + 1 }
            : item
        )
      );
    }
    setCount(items.reduce((x, y) => x + y.qty, 1));
  };

  const removeHandler = (product) => {
    const item = items.find((item) => item.id === product.id);
    if (item.qty === 1) {
      setItems(items.filter((cItem) => cItem.id !== item.id));
    } else {
      setItems(
        items.filter((cItem) => (cItem.id === item.id ? cItem.qty-- : cItem))
      );
    }
  };

  return (
    <CartProvider>
      <Header count={count} />
      <div>
        <Cart
          items={items}
          clickHandler={clickHandler}
          removeHandler={removeHandler}
        />
        <Shop item={items} clickHandler={clickHandler} />
      </div>
    </CartProvider>
  );
}

export default App;
