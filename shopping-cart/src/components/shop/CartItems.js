import classes from "./CartItems.module.css";
import Button from "../UI/Button";

const CartItems = (props) => {
  const items = props.items;
  const { clickHandler, removeHandler } = props;
  const totalPrice = items.reduce((x, y) => x + y.qty * y.price, 0);

  const productsList = items.map((item) => {
    return (
      <div className={classes.products} key={item.id}>
        <div>{item.name}</div>
        <Button onClick={() => clickHandler(item)}>+</Button>
        <Button onClick={() => removeHandler(item)}>-</Button>
        <div>
          {item.qty} * ${item.price}
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
        <div>${totalPrice}</div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartItems;
