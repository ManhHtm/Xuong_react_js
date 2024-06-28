import React from "react";
import "../assets/scss/footer.scss";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="content1">
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="email">
              <input type="text" placeholder="Enter your email" />
              <span className="uil--message"></span>
            </div>
          </div>

          <div className="content2">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="content3">
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>

          <div className="content4">
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>

          <div className="content5">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="img">
              <div className="img1">
                <img src="images/item/qr.png" alt="" />
              </div>
              <div className="img2">
                <img src="images/item/gg.png" alt="" className="img-1" />
                <br />
                <img src="images/item/apple.png" alt="" className="img-2" />
              </div>
            </div>
            <img src="images/item/Frame 741.png" alt="" />
          </div>
        </div>
        <div className="title">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
