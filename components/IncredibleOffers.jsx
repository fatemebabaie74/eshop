import React from "react";
import Carusel from "./Carusel";
import Image from "next/image";
import styles from "./IncredibleOffers.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const IncredibleOffers = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={6} data={props.data} />
      </div>
      <div className={`${styles.rightContainer}`}>
        <Image className= {`${styles.image}`} src="/images/amazingTypo.png" height={70} width={70} />
        <Image src="/images/box.png" height={90} width={90} />

        <Link href={"/NothingIncredibleOffers"}>
        <button className={`${styles.button}`} > <IoIosArrowBack className={`${styles.svg}`} />
          
       مشاهده همه
        </button>
        </Link>
      </div>
  
    </div>
  );
};

export default IncredibleOffers;
