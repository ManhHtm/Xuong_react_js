import React from "react";
import "../assets/scss/category.scss";
const Category = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <div className="ov"></div>
          <h1>Danh mục sản phẩm</h1>
        </div>

        <div className="container">
          <div className="cates">
            <a href="" className="cate">
              <span className="arcticons--smartphone"></span>
              <p style={{ marginLeft: "52px" }}>Phones</p>
            </a>

            <a href="" className="cate">
              <span className="ph--laptop-thin"></span>
              <p style={{ marginLeft: "52px" }}>Laptop</p>
            </a>

            <a href="" className="cate">
              <span className="cbi--apple-watch"></span>
              <p style={{ marginLeft: "40px" }}>SmartWatch</p>
            </a>

            <a href="" className="cate">
              <span className="ph--camera-thin"></span>
              <p style={{ marginLeft: "52px" }}>Camera</p>
            </a>

            <a href="" className="cate">
              <span className="ph--headphones-thin"></span>
              <p style={{ marginLeft: "40px" }}>HeadPhone</p>
            </a>

            <a href="" className="cate">
              <span className="ph--game-controller-thin"></span>
              <p style={{ marginLeft: "52px" }}>Gaming</p>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Category;
