import classes from "./Header.module.css";
import Card from "../UI/Card";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <Card>
      <div className={classes.header}>
        <h2>Shopping Cart</h2>
        <HeaderCart />
      </div>
    </Card>
  );
};

export default Header;
