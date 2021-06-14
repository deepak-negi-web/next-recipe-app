import React from "react";

const carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner" style={{ display: "block" }}>
        <div className="carousel-item active">
          <img
            src="/Assests/home/featured1.png"
            alt="Los Angeles"
            style={{ width: "100%", height: "500px" }}
          />
          <div className="carousel-caption">
            <h3 style={{ color: "#eeeeee" }}>Yumm Pizza</h3>
            <p>Love at first bite</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/Assests/home/featured2.png"
            alt="Chicago"
            style={{ width: "100%", height: "500px" }}
          />
          <div className="carousel-caption">
            <h3 style={{ color: "#eeeeee" }}>Delicious Brownies</h3>
            <p>Feeling downie eat a Brownie</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/Assests/home/featured3.png"
            alt="New York"
            style={{ width: "100%", height: "500px" }}
          />
          <div className="carousel-caption">
            <h3 style={{ color: "#eeeeee" }}>Pumpkin Spice Latte</h3>
            <p>Fresh your day</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};
export default carousel;
