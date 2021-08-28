import React from "react";
import Image from "next/image";
import { SEO } from "../Components";
import { SocialIcon, ThreeDecorIcon } from "../Components/UI/Banner/BannerIcon";
import Link from "next/link";

const home = () => (
  <>
    <SEO
      title="Home"
      desc="Nuskha brings the foods the most precious things"
      image="https://firebasestorage.googleapis.com/v0/b/nuskha-your-own-recipe.appspot.com/o/home.png?alt=media&token=2a36b0cc-f252-456c-840c-d8c0a45bbb52"
    />

    <section className="hero-banner">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1 className="hero-title">
            Foods the <br /> most precious things
          </h1>
          <div className="d-sm-flex flex-wrap">
            <Link href="/search">
              <a className="button button-hero button-shadow">
                <i className="fas fa-search mr-1" /> Search Recipes
              </a>
            </Link>
            <Link href="/post">
              <a
                className="button button-hero button-shadow"
                style={{ marginLeft: "10px" }}
              >
                <i className="fas fa-edit mr-1" /> Write Recipes
              </a>
            </Link>
          </div>
          <ThreeDecorIcon />
        </div>
        <div className="hero-right">
          <div>
            <div className="sideImage">
              <Image
                className="img-fluid"
                src="/Assests/banner/hero-banner-sm.png"
                alt="hero"
                height={500}
                width={500}
                layout="fixed"
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
              <Image
                className="card-img rounded-0"
                src="/Assests/blog/blog1.png"
                alt="blog1"
                height={500}
                width={500}
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
              <Image
                className="card-img rounded-0"
                src="/Assests/blog/blog2.png"
                alt="blog2"
                height={500}
                width={500}
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
              <Image
                className="card-img rounded-0"
                src="/Assests/blog/blog3.png"
                alt="blog3"
                height={500}
                width={500}
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
  </>
);

export default home;
