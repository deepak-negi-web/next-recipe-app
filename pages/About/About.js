import React from "react";
import BannerHeader from "../../Components/UI/Banner/BannerHeader/BannerHeader";
import carouselImage1 from "../../../Assests/home/featured1.png";
import carouselImage2 from "../../../Assests/home/featured2.png";
import carouselImage3 from "../../../Assests/home/featured3.png";
import image from "../../../Assests/banner/hero-banner-sm.png";
import Carousel from "../../Components/UI/Carousel/Carousel";
const about = (props) => {
  const Description = (
    <p>
      From set together our divided own saw divided the form god{" "}
      <br className="d-none d-xl-block" /> seas moveth you will fifth under
      replenish end
    </p>
  );
  return (
    <React.Fragment>
      <BannerHeader
        pageName="About Us"
        pageDescription={Description}
        imgPath={image}
      />
      <section className="about section-margin pb-xl-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0 px-4">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    className="styleBox-img1 img-fluid"
                    src={require("../../../Assests/home/about-img1.png")}
                    alt=""
                  />
                </div>
                <img
                  className="styleBox-img2 img-fluid"
                  src={require("../../../Assests/home/about-img2.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
              <div className="section-intro mb-lg-4">
                <h4 className="intro-title">About Us</h4>
                <h2>We speak the good food language</h2>
              </div>
              <p>
                Living first us creepeth she'd earth second be sixth hath
                likeness greater image said sixth was without male place fowl
                evening an grass form living fish and rule lesser for blessed
                can't saw third one signs moving stars light divided was two you
                him appear midst cattle for they are gathering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-margin mb-lg-100">
        <div className="container-fluid">
          <div className="section-intro mb-4">
            <h2>Featured Recipe</h2>
            <h4
              className="intro-title"
              style={{ textAlign: "center", display: "block" }}
            >
              Fresh taste and great recipes
            </h4>
          </div>
          <Carousel
            image1={carouselImage1}
            image2={carouselImage2}
            image3={carouselImage3}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default about;
