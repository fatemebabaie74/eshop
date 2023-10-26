import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopBanner.module.css";
import { GET } from "../repository/AxiosRepository";
const TopBanner = () => {
  const [topBannerData, setTopBannerData] = useState({});
  useEffect(() => {
    //console.log(constants.REST_API_ADDRESS);
    // axios
    //   .get(`${constants.REST_API_ADDRESS}/topBanner`)
    GET("/topBanner").then((response) => setTopBannerData(response.data));
  }, []);

  return (
    <div className={`${styles.outerContainer}`}>
      <Image className={`${styles.banner}`} fill src={topBannerData.imageUrl} />
    </div>
  );
};

export default TopBanner;
