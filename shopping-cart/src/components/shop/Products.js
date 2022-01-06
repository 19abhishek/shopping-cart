import classes from "./Products.module.css";
import Button from "../UI/Button";

const Products = (props) => {
  return (
    <div>
      <figure>
        <img className={classes.img} src={props.img} alt={props.name} />
      </figure>
      <div className={classes.properties}>
        <div>{props.name}</div>
        <div>$ {props.price}</div>
      </div>
      <Button className={classes.btn} onClick={props.click}>
        Add to cart
      </Button>
    </div>
  );
};

export default Products;
