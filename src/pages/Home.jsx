import React, { useContext } from "react";
import Banner from "../components/Banner";
import "../assets/scss/home.scss";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import { ProductsContext } from "../contexts/ProductsContext";
const Home = () => {
  const { state } = useContext(ProductsContext);

  return (
    <div>
      <Banner />
      <Category />
      <div className="container">
        <div className="title">
          <div className="ov"></div>
          <h1>Sản phẩm</h1>
        </div>

        <div className="row">
          {state.products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card">
                <Link to={`/products-detail/${product.id}`}>
                  <img src={product.thumbnail} alt="" />
                </Link>

                <div className="content">
                  <h2>{product.title}</h2>
                  <h3>$ {product.price}</h3>
                  <div className="icon">
                    <i className="large material-icons">add_shopping_cart</i>
                    <i className="large material-icons">favorite_border</i>
                    <Link
                      to={`/products-detail/${product.id}`}
                      className="large material-icons"
                    >
                      remove_red_eye
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
