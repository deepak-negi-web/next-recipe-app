import React from "react";
import DecorIcon from "../BannerIcon/3DecorIcon/3DecorIcon";
import SocialIcon from "../BannerIcon/SocialIcon/SocialIcon";
const bannerHeader = (props) => (
  <section className="hero-banner hero-banner-sm">
    <div className="hero-wrapper">
      <div className="hero-left">
        <h1 className="hero-title">{props.pageName}</h1>
        {props.pageDescription}
        <DecorIcon fullRecipe={props.fullRecipe} />
      </div>
      <div className="hero-right">
        <div>
          <div className="sideImage">
            <img
              className="img-fluid"
              src="/Assests/banner/hero-banner-sm.png"
              alt=""
              style={{ width: "100%", display: "block", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <SocialIcon />
    </div>
  </section>
);

export default bannerHeader;
