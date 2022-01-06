import classes from "./CartItems.module.css";
import Button from "../UI/Button";

const CartItems = (props) => {
  const items = props.items;

  const productsList = items.map((item) => {
    return (
      <div className={classes.products}>
        <div>{props.name}</div>
        <div>
          `{props.qty} * ${props.price}`
        </div>
      </div>
    );
  });
  return (
    <div>
      {/* <div className={classes.products}>
        <div>Product 1</div>
        <div>$500</div>
      </div> */}
      {productsList}
      <div className={classes.totalPrice}>
        <div>Total Price:</div>
        <div>$3200</div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartItems;
