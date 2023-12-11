import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import { useEffect } from "react";
import { GET } from "../repository/FetchApiRepository";
import Context from "../contextApi/Context";
import SevenIcons from "../components/SevenIcons";
import Carusel from "../components/Carusel";
import IncredibleOffers from "../components/IncredibleOffers";
import IncredibleSuperMarket from "../components/supermarket/IncredibleSuperMarket";

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Context.Provider value={{ mainSliderImages: props.mainSliderResponse }}>
        <MainSlider />
        <SevenIcons products={props.sevenIconsResponse} />

        <IncredibleOffers data={props.incredibleOffersResponse} />
        <IncredibleSuperMarket />
         </Context.Provider>

        </div>
     
     
    
  );
}

export async function getStaticProps(context) {
  const mainSliderRequest = await GET("/public/mainSlider");
  const mainSliderResponse = await mainSliderRequest.json();

  const sevenIconsRequest = await GET("/SevenIcons");
  const sevenIconsResponse = await sevenIconsRequest.json();

  const incredibleOffersRequest = await GET("/products/incredibleOffers");
  const incredibleOffersResponse = await incredibleOffersRequest.json();

  // const IncredibleSuperMarketRequest = await GET("/products/dailySuggests");
  // const IncredibleSuperMarketResponse = await IncredibleSuperMarketRequest.json();
  
  return {
    props: { mainSliderResponse, sevenIconsResponse, incredibleOffersResponse },
    revalidate: 600,
  };
}
