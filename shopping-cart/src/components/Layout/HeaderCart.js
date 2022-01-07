import classes from "./HeaderCart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const total = items.reduce((x, y) => x + y.qty, 0);
  return (
    <div className={classes.headerCart}>
      <span>Cart</span>
      <span className={classes.count}>{total}</span>
    </div>
  );
};

export default HeaderCart;
