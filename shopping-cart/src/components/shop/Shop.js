import classes from "./Shop.module.css";
import Products from "./Products";
import Card from "../UI/Card";
import shoes from "../images/shoes.jpeg";
import camera from "../images/camera.jpeg";
import telephone from "../images/telephone.jpeg";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const DUMMY_PRODUCTS = [
  { id: "p1", path: camera, name: "Camera", price: 699 },
  { id: "p2", path: shoes, name: "Shoes", price: 99 },
  { id: "p3", path: telephone, name: "Telephone", price: 199 },
];

const Shop = (props) => {
  const { clickHandler } = props;
  const cartCtx = useContext(CartContext);
  const { addItem } = cartCtx;

  return (
    <Card>
      <h3>Products</h3>
      <div className={classes.products}>
        {DUMMY_PRODUCTS.map((prod) => {
          return (
            <Products
              key={prod.id}
              img={prod.path}
              name={prod.name}
              price={prod.price}
              clickHandler={() => addItem(prod)}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Shop;
