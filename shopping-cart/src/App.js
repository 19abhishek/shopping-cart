import Header from "./components/Layout/Header";
import Cart from "./components/shop/Cart";
import Shop from "./components/shop/Shop";
import classes from "./App.module.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const clickHandler = (product) => {
    let itemIndex = items.findIndex((id) => id === product.key);
    if (itemIndex === -1) {
      const newItems = [
        {
          id: product.key,
          name: product.name,
          price: product.price,
          qty: 1,
        },
      ];
      setItems(newItems);
    } else {
      let currProd = items[itemIndex];
      currProd.qty++;
      items.splice(itemIndex, 1, currProd);
      setItems(items);
    }
  };

  return (
    <div>
      <Header count={count} />
      <div className={classes.list}>
        <Shop item={items} click={clickHandler} />
        <Cart items={items} />
      </div>
    </div>
  );
}

export default App;
