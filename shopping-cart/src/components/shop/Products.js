import classes from "./Products.module.css";
import Button from "../UI/Button";
import shoes from "../images/shoes.jpeg";
import { Fragment } from "react";

const Products = (props) => {
  return (
    <div>
      <figure>
        <img className={classes.img} src={props.img} alt={props.name} />
      </figure>
      <div>
        <div>{props.name}</div>
        <div>$ {props.price}</div>
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default Products;
