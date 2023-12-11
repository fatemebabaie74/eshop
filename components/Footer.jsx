import React from "react";
import DigiKalaFooter from "./footer/DigiKalaFooter";
import FooterAx from "./footer/FooterAx";
import GuideFooter from "./footer/GuideFooter";
import DownloadDigikala from "./footer/DownloadDigikala";
import MoreInformation from "./footer/MoreInformation";

const Footer = () => {
  return <div> 
    <DigiKalaFooter/>
    <FooterAx/>
    <GuideFooter/>
    <DownloadDigikala/>
    <MoreInformation/>
  </div>;
};

export default Footer;
