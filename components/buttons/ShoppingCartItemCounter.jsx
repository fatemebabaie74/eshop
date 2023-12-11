import React from "react";
import styles from "./ShoppingCartItemCounter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeItem,
} from "../../redux/features/shoppingCart/ShoppingCartSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

const ShoppingCartItemCounter = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const itemCount = shoppingCart.items.filter(
    (item) => item.id === productId
  )[0].count;

  return (
    <div className={`${styles.outerContainer}`}>
      <span className={`${styles.spanContainer}`} onClick={() => dispatch(increaseCount(productId))}>+</span>

      <span>{itemCount}</span>

      {itemCount === 1 ? (
        <BsFillTrash3Fill className={`${styles.svgContainer}`} onClick={() => dispatch(removeItem(productId))} />
      ) : (
        <span className={`${styles.spannContainer}`} onClick={() => dispatch(decreaseCount(productId))}>-</span>
      )}
    </div>
  );
};

export default ShoppingCartItemCounter;
