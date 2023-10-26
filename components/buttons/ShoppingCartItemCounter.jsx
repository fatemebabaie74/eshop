import React from "react";
import styles from "./ShoppingCartItemCounter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../../redux/features/shoppingCart/ShoppingCartSlice";

const ShoppingCartItemCounter = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const itemCount = shoppingCart.items.filter(
    (item) => item.id === productId
  )[0].count;

  return (
    <div>
      <span>-</span>
      <span>{itemCount}</span>
      <span onClick={() => dispatch(increaseCount(productId))}>+</span>
    </div>
  );
};

export default ShoppingCartItemCounter;
