import Card from "../UI/Card";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Card>
      <div className={classes.flex}>
        <h3>Cart Items</h3>
        <CartItems items={props.items} />
      </div>
    </Card>
  );
};

export default Cart;
