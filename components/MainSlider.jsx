import React, { useContext } from "react";
import styles from "./MainSlider.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Context from "../contextApi/Context";
import ReactImageGallery from "react-image-gallery";

const MainSlider = () => {
  const { mainSliderImages } = useContext(Context);
  console.log(mainSliderImages);
  return (
    <div>
   
      <ReactImageGallery 
        key={mainSliderImages.id}
        id={mainSliderImages.id}
        autoPlay={true}
        slideInterval={2000}
        showThumbnails = {false}
        showPlayButton={false}
        showFullscreenButton={false}
        isRTL={true}
      
        items={mainSliderImages}
      />
    </div>
  );
};

export default MainSlider;
