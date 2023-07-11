import React from "react";
import product1 from "../assets/images/1.jpg";
import product2 from "../assets/images/2.jpg";
import product3 from "../assets/images/3.png";
import product4 from "../assets/images/4.jpg";
import product5 from "../assets/images/5.jpg";
import product6 from "../assets/images/6.jpg";

const Shop = () => {
  return (
    <>
      <main>
        <div className="product-container">
          <div className="container">
            {/* <!--
              - SIDEBAR */}
            {/* --> */}

            <div className="sidebar has-scrollbar" data-mobile-menu>
              <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>

                  <button
                    className="sidebar-close-btn"
                    data-mobile-menu-close-btn
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>

                <ul className="sidebar-menu-category-list">
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <p className="menu-title">Solar Panels</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <p className="menu-title">UPS / Inverters</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <p className="menu-title">Accessories</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <p className="menu-title">Others</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="product-box">
              {/* <!--
                - PRODUCT MINIMAL
              --> */}

              <div className="product-minimal">
                <div className="product-showcase">
                  <h2 className="title">New Arrivals</h2>

                  <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product1}
                            alt="Longi 540 Bifacial Hi-Mo5 LR5-72HBD"
                            width="70"
                            className="showcase-img"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Longi 540 Bifacial Hi-Mo5 LR5-72HBD
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Electronics
                          </a>

                          <div className="price-box">
                            <p className="price">$145.00</p>
                          </div>
                        </div>
                      </div>

                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product2}
                            alt="Jinko 535W Tiger Pro 72HC Mono Facial Module"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Jinko 535W Tiger Pro 72HC Mono Facial Module
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Electronics
                          </a>

                          <div className="price-box">
                            <p className="price">$100.00</p>
                          </div>
                        </div>
                      </div>

                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product3}
                            alt="Cheetah Plus HC 78M 400Watt Mono Perc Half Cell Module"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Cheetah Plus HC 78M 400Watt Mono Perc Half Cell
                              Module
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Electronics
                          </a>

                          <div className="price-box">
                            <p className="price">$150.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-showcase">
                  <h2 className="title">Trending</h2>

                  <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product3}
                            alt="Cheetah Plus HC 78M 400Watt Mono Perc Half Cell Module"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                            Cheetah Plus HC 78M 400Watt Mono Perc Half Cell Module
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Tech
                          </a>

                          <div className="price-box">
                            <p className="price">$150.00</p>
                          </div>
                        </div>
                      </div>

                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product6}
                            alt="Aspire-Off, Inverter/UPS, Uncategorized, Voltronic-Offgrid"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Aspire-Off, Inverter/UPS, Uncategorized,
                              Voltronic-Offgrid
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Tech
                          </a>

                          <div className="price-box">
                            <p className="price">$250.00</p>
                          </div>
                        </div>
                      </div>

                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product6}
                            alt="Aspire-Off, Inverter/UPS, Uncategorized, Voltronic-Offgrid"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                            Aspire-Off, Inverter/UPS, Uncategorized, Voltronic-Offgrid
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Tech
                          </a>

                          <div className="price-box">
                            <p className="price">$150.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-showcase">
                  <h2 className="title">Top Rated</h2>

                  <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product4}
                            alt="Inverex 5kw NitroX Hybrid Inverter"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Inverex 5kw NitroX Hybrid Inverter
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Electronics
                          </a>

                          <div className="price-box">
                            <p className="price">$50.00</p>
                          </div>
                        </div>
                      </div>

                      <div className="showcase">
                        <a className="showcase-img-box">
                          <img
                            src={product5}
                            alt="Inverex 150w Mono PERC Inverperfect INV-150"
                            className="showcase-img"
                            width="70"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="text">
                            <h4 className="showcase-title">
                              Inverex 150w Mono PERC Inverperfect INV-150
                            </h4>
                          </a>

                          <a className="showcase-category">
                            Tech
                          </a>

                          <div className="price-box">
                            <p className="price">$350.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--
                - PRODUCT FEATURED
              --> */}

              <div className="product-featured">
                <h2 className="title">Deal of the day</h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="./assets/images/products/shampoo.jpg"
                          alt="shampoo, conditioner & facewash packs"
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <a href="text">
                          <h3 className="showcase-title">
                            shampoo, conditioner & facewash packs
                          </h3>
                        </a>

                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div className="price-box">
                          <p className="price">$150.00</p>
                        </div>

                        <button className="add-cart-btn">add to cart</button>

                        <div className="showcase-status">
                          <div className="wrapper">
                            <p>
                              already sold: <b>20</b>
                            </p>

                            <p>
                              available: <b>40</b>
                            </p>
                          </div>

                          <div className="showcase-status-bar"></div>
                        </div>

                        <div className="countdown-box">
                          <p className="countdown-desc">
                            Hurry Up! Offer ends in:
                          </p>

                          <div className="countdown">
                            <div className="countdown-content">
                              <p className="display-number">360</p>

                              <p className="display-text">Days</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">00</p>
                              <p className="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src={''}
                          alt="Rose Gold diamonds Earring"
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <h3 className="showcase-title">
                          <a className="showcase-title">
                            Rose Gold diamonds Earring
                          </a>
                        </h3>

                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum
                          dolor dolor sit amet consectetur Lorem ipsum dolor
                        </p>

                        <div className="price-box">
                          <p className="price">$1990.00</p>
                        </div>

                        <button className="add-cart-btn">add to cart</button>

                        <div className="showcase-status">
                          <div className="wrapper">
                            <p>
                              already sold: <b>15</b>
                            </p>

                            <p>
                              available: <b>40</b>
                            </p>
                          </div>

                          <div className="showcase-status-bar"></div>
                        </div>

                        <div className="countdown-box">
                          <p className="countdown-desc">
                            Hurry Up! Offer ends in:
                          </p>

                          <div className="countdown">
                            <div className="countdown-content">
                              <p className="display-number">360</p>
                              <p className="display-text">Days</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>

                            <div className="countdown-content">
                              <p className="display-number">00</p>
                              <p className="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
