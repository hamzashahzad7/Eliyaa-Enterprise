import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-nav">
          <div className="container footer-main">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Products</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Solar Panels
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Solar Pumps
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Accessories
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  UPS / Inverters
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Others
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>

              <li className="footer-nav-item">
                <Link to={"/about"} className="footer-nav-link">
                  About Us
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to={"/shop"} className="footer-nav-link">
                  Shop
                </Link>
              </li>

              <li className="footer-nav-item">
                <Link to={"/contact"} className="footer-nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Door-to-Door Service
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Fast Delivery
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Great Quality
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Yearly Warranty
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address className="content">
                  Main GT Road, Beside Faisal Bank, Near Darogawala Chock,
                  Lahore
                </address>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" className="footer-nav-link">
                  (+92) 300 7113227
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">
                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright &copy; <a href="#">Eliyaa</a> all rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
