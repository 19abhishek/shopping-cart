import classes from "./Card.module.ccss";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
