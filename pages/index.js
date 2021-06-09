import React from "react";
import { Three } from "../Components";
import SocialIcon from "../../UI/Banner/BannerIcon/SocialIcon/SocialIcon";
import { Link } from "react-router-dom";
const home = (props) => (
  <React.Fragment>
    <section className="hero-banner">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1 className="hero-title">
            Foods the <br /> most precious things
          </h1>
          <div className="d-sm-flex flex-wrap">
            <Link className="button button-hero button-shadow" to="/search">
              <i className="fas fa-search mr-1" /> Search Recipes
            </Link>
            <Link
              className="button button-hero button-shadow"
              to="/post"
              style={{ marginLeft: "10px" }}
            >
              <i className="fas fa-edit mr-1" /> Write Recipes
            </Link>
          </div>
          <DecorIcon />
        </div>
        <div className="hero-right">
          <div>
            <div className="sideImage">
              <img
                className="img-fluid"
                src={require("../../../Assests/banner/hero-banner-sm.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <SocialIcon />
      </div>
    </section>

    <section className="section-margin">
      <div className="container">
        <div className="section-intro mb-75px">
          <h2>Latest food and recipe news</h2>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card-blog">
              <img
                className="card-img rounded-0"
                src={require("../../../Assests/blog/blog1.png")}
                alt=""
              />
              <div className="blog-body">
                <ul className="blog-info">
                  <li>Admin post</li>
                  <li>Jan 10, 2019</li>
                </ul>

                <h3>Huge cavity in antarctic glacie signals rapid</h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card-blog">
              <img
                className="card-img rounded-0"
                src={require("../../../Assests/blog/blog2.png")}
                alt=""
              />
              <div className="blog-body">
                <ul className="blog-info">
                  <li>Admin post</li>
                  <li>Jan 10, 2019</li>
                </ul>

                <h3>Researcher unearths age in the desert</h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card-blog">
              <img
                className="card-img rounded-0"
                src={require("../../../Assests/blog/blog3.png")}
                alt=""
              />
              <div className="blog-body">
                <ul className="blog-info">
                  <li>Admin post</li>
                  <li>Jan 10, 2019</li>
                </ul>

                <h3>High-protein rice brings value, nutrition</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default home;
