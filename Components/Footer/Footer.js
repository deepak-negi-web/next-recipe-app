import React from "react";

const footer = (props) => (
  <React.Fragment>
    <section className="cta-area text-center">
      <div className="container">
        <p>Some Trendy And Popular Recipes Offerd</p>
        <h2>Try these recipes at home and love it</h2>
      </div>
    </section>
    <footer className="footer-area section-gap" style={{paddingTop: "10px"}}>
      <div className="container">
        <div className="footer-bottom row align-items-center text-center text-lg-left">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This website is made with{" "}
            <i className="ti-heart" aria-hidden="true"></i> by{" "}
            <a
              href="https://www.linkedin.com/in/deepak-negi-437716173/"
              target="blank"
            >
              Deepak Negi
            </a>
          </p>
          <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
            <a href="https://www.linkedin.com/in/deepak-negi-437716173/">
              <i className="ti-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/deepak-negi-437716173/">
              <i className="ti-twitter-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/deepak-negi-437716173/">
              <i className="ti-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default footer;
