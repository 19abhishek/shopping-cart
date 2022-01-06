import Header from "./components/Layout/Header";
import Cart from "./components/shop/Cart";
import Shop from "./components/shop/Shop";
import classes from "./App.module.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const clickHandler = (product) => {
    console.log(product);

    let itemIndex = items.findIndex((item) => item.id === product.id);
    console.log(itemIndex);
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
    console.log(items);
  };

  return (
    <div>
      <Header count={count} />
      <div className={classes.list}>
        <Shop item={items} clickHandler={clickHandler} />
        <Cart items={items} />
      </div>
    </div>
  );
}

export default App;
