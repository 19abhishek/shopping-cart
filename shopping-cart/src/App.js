import Header from "./components/Layout/Header";
import Cart from "./components/shop/Cart";
import Shop from "./components/shop/Shop";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.list}>
        <Shop />
        <Cart />
      </div>
    </div>
  );
}

export default App;
