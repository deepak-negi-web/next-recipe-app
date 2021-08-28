import React from "react";
import BannerHeader from "../../Components/UI/Banner/BannerHeader/BannerHeader";
import Carousel from "../../Components/UI/Carousel/Carousel";
import { SEO } from "../../Components";
const about = () => {
  const Description = (
    <p>
      From set together our divided own saw divided the form god{" "}
      <br className="d-none d-xl-block" /> seas moveth you will fifth under
      replenish end
    </p>
  );
  return (
    <React.Fragment>
      <SEO
        title="About us"
        desc="Nuskha brings the foods the most precious things,We speak the good food language"
        image="https://firebasestorage.googleapis.com/v0/b/nuskha-your-own-recipe.appspot.com/o/about.png?alt=media&token=46bc83ea-7336-4a31-adf4-6d76903c69f6"
      />
      <BannerHeader pageName="About Us" pageDescription={Description} />
      <section className="about section-margin pb-xl-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0 px-4">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    className="styleBox-img1 img-fluid"
                    src="/Assests/home/about-img1.png"
                    alt=""
                  />
                </div>
                <img
                  className="styleBox-img2 img-fluid"
                  src="/Assests/home/about-img2.png"
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
          <Carousel />
        </div>
      </section>
    </React.Fragment>
  );
};

export default about;
