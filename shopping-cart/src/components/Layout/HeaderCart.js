import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  return (
    <div className={classes.headerCart}>
      <span>Cart</span>
      <span className={classes.count}>{0}</span>
    </div>
  );
};

export default HeaderCart;
