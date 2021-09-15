import React from "react";
import { ThreeDecorIcon, SocialIcon } from "../BannerIcon";
import Image from "next/image";
const bannerHeader = (props) => (
  <section className="hero-banner hero-banner-sm">
    <div className="hero-wrapper">
      <div className="hero-left">
        <h1 className="hero-title">{props.pageName}</h1>
        {props.pageDescription}
        <ThreeDecorIcon fullRecipe={props.fullRecipe} />
      </div>
      <div className="hero-right">
        <div>
          <div className="sideImage">
            <Image
              className="img-fluid"
              src={
                props?.imgPath
                  ? props?.imgPath
                  : "/Assests/banner/hero-banner-sm.png"
              }
              alt=""
              layout="fill"
            />
          </div>
        </div>
      </div>
      <SocialIcon />
    </div>
  </section>
);

export default bannerHeader;
