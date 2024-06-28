import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IProducts from "../axios/axios";
import "../assets/scss/detail.scss";
const Detail = () => {
  //   console.log(products);
  const { id } = useParams({});
  // console.log(id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await IProducts.get(`/products/${id}`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="item">
          <div className="image">
            <img src={products.thumbnail} alt="" />
          </div>
          <div className="text">
            <h1>{products.title}</h1>
            <h2>$ {products.price}</h2>
            <p>{products.description}</p>
            <button className="button">
              <span className="button-content">Add to card </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
