import React from "react";
import styles from "./AddToShoppingCart.module.css";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../redux/features/shoppingCart/ShoppingCartSlice";
const AddToShoppingCart = ({ product }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(addNewItem(product));
  };
  return (
    <div className={`${styles.outerContainer}`}>
      <span onClick={clickHandler}>خرید</span>
    </div>
  );
};

export default AddToShoppingCart;
