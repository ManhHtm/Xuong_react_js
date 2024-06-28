import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../assets/scss/banner.scss";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const images = [
  "https://img.global.news.samsung.com/vn/wp-content/uploads/2024/01/GalaxyS24Ultra_KV.jpg",
  "https://i0.wp.com/mtcfactoryoutlet.com/wp-content/uploads/2021/03/04_galaxys21_plus_phantom_violet_front_r30-scaled.jpg?fit=2560%2C1707&ssl=1",
  "https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/4:3/w_1440,h_1080,c_limit/iPhone-14-Pro-Max-Review_02.jpg",
  "https://inwfile.com/s-j/y3k7fw.jpg",
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "1000px",
};

const Banner = () => {
  return (
    <div>
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{ ...divStyle, backgroundImage: `url(${images[0]})` }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ ...divStyle, backgroundImage: `url(${images[1]})` }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ ...divStyle, backgroundImage: `url(${images[2]})` }}
          ></div>
        </div>
      </Slide>
      <hr />
    </div>
  );
};

export default Banner;
