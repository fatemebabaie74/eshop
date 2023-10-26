import React from "react";
import Carusel from "./Carusel";
import Image from "next/image";
import styles from "./IncredibleOffers.module.css";

const IncredibleOffers = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={5} data={props.data} />
      </div>
      <div className={`${styles.rightContainer}`}>
        <Image src="/images/amazingTypo.png" height={80} width={80} />
        <Image src="/images/box.png" height={80} width={80} />
      </div>
    </div>
  );
};

export default IncredibleOffers;
