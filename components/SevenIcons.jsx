import Image from "next/image";
import React from "react";
import styles from "./SevenIcons.module.css";
import Link from "next/link";

const SevenIcons = ({ products }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {products.map((item) => {
        return (
          <Link href={`/products/category/${item.url}`}>
            <div className={`${styles.itemContainer}`}>
              <Image src={`/images/${item.iconName}`} width={60} height={60} />
              <label className={`${styles.label}`}>{item.label}</label>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SevenIcons;
