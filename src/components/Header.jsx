import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.svg";
import style from "../assets/module/header.module.scss";

const Header = () => {
  const nav = useNavigate();
  const email = JSON.parse(localStorage.getItem("user"))?.user?.email;
  const handleLogout = () => {
    if (confirm("Logout?")) {
      localStorage.removeItem("user");
      nav("/login");
    }
  };
  return (
    <div>
      <div className={style.container}>
        <header>
          <div className={style.logo}>
            <Link to="">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <div className={style.logReg}>
            {email ? (
              <button onClick={handleLogout}>
                <span className="material-symbols-outlined">logout</span>
              </button>
            ) : (
              <Link to="/login">
                <span className="material-symbols-outlined">group</span>
              </Link>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
