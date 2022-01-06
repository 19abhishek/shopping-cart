import classes from "./CartItems.module.css";
import Button from "../UI/Button";

const CartItems = () => {
  return (
    <div>
      <div className={classes.products}>
        <div>Product 1</div>
        <div>$500</div>
      </div>
      <div className={classes.totalPrice}>
        <div>Total Price:</div>
        <div>$3200</div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartItems;
