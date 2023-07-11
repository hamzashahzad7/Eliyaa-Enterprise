import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>

            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD &dollar;</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <a className="header-logo">
              <img
                src="./assets/images/logo/logo.svg"
                alt="Anon's logo"
                width="120"
                height="36"
              />
            </a>

            <nav className="desktop-navigation-menu">
              <div className="container">
                <ul className="desktop-menu-category-list">
                  <li className="menu-category">
                    <Link to={'/'} className="menu-title">
                      Home
                    </Link>
                  </li>

                  <li className="menu-category">
                    <Link to={'/about'} className="menu-title">
                      About Us
                    </Link>
                  </li>

                  <li className="menu-category">
                    <Link to={'/shop'} className="menu-title">
                      Shop
                    </Link>

                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <a>Solar Panels</a>
                      </li>

                      <li className="dropdown-item">
                        <a>Inverters / UPS</a>
                      </li>

                      <li className="dropdown-item">
                        <a>Solar Pumps</a>
                      </li>

                      <li className="dropdown-item">
                        <a>Accessories</a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-category">
                    <Link to={'/contact'} className="menu-title">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-user-actions">
              <Link to={'shop'} className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
              </Link >
            </div>
          </div>
        </div>

        <div
          className="header-search-container"
          style={{maxWidth: 400, margin: '2rem auto'}}
        >
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Search your product name..."
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
