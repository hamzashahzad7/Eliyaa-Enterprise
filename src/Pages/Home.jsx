import React from "react";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import company1 from "../assets/images/companies/1.png";
import company2 from "../assets/images/companies/2.png";
import company3 from "../assets/images/companies/3.png";
import company4 from "../assets/images/companies/4.png";
import company5 from "../assets/images/companies/5.png";
import company6 from "../assets/images/companies/6.png";
import company7 from "../assets/images/companies/7.png";
import img1 from "../assets/images/img3.png";
import img2 from "../assets/images/img4.png";
import img3 from "../assets/images/img5.png";
import product1 from "../assets/images/1.jpg";
import product2 from "../assets/images/2.jpg";
import product3 from "../assets/images/3.png";
import product4 from "../assets/images/4.jpg";
import product5 from "../assets/images/5.jpg";

// import img4 from "../assets/images/img4.png";
// import img5 from "../assets/images/img5.png";

const Home = () => {
  return (
    <div>
      <main>
        {/* <!--
      - BANNER
    --> */}

        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <img
                  src={banner1}
                  alt="women's latest fashion sale"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>

                  <h2 className="banner-title">Women's latest fashion sale</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>

                  <a className="banner-btn">Shop now</a>
                </div>
              </div>

              <div className="slider-item">
                <img
                  src={banner2}
                  alt="modern sunglasses"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Trending accessories</p>

                  <h2 className="banner-title">Modern sunglasses</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>15</b>.00
                  </p>

                  <a className="banner-btn">Shop now</a>
                </div>
              </div>

              <div className="slider-item">
                <img
                  src={banner3}
                  alt="new fashion summer sale"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Sale Offer</p>

                  <h2 className="banner-title">New fashion summer sale</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>29</b>.99
                  </p>

                  <a className="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
      - CATEGORY
    --> */}

        <div className="category">
          <div className="container">
            <div className="category-item-container has-scrollbar">
              <div className="category-item">
                <img src={company1} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company2} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company3} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company4} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company5} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company7} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company6} alt="dress & frock" width="30" />
              </div>
              <div className="category-item">
                <img src={company1} alt="dress & frock" width="30" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Banners --> */}
        <div className="main-container">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        {/* <!-- */}
        {/* - BLOG */}
        {/* --> */}

        <div className="blog">
          <h2>Hot Products</h2>
          <div className="blog-line"></div>
          <div className="container">
            <div className="blog-container has-scrollbar">
              <div className="blog-card">
                <a>
                  <img
                    src={product1}
                    alt="Longi 540 Bifacial Hi-Mo5 LR5-72HBD"
                    width="300"
                    className="blog-banner"
                  />
                </a>

                <div className="blog-content">
                  <a className="blog-category">Electronics</a>

                  <a>
                    <h3 className="blog-title">
                      Longi 540 Bifacial Hi-Mo5 LR5-72HBD
                    </h3>
                  </a>
                </div>
              </div>

              <div className="blog-card">
                <a>
                  <img
                    src={product2}
                    alt="Jinko 535W Tiger Pro 72HC Mono Facial Module"
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a className="blog-category">Electronics</a>

                  <h3>
                    <a className="blog-title">
                      Jinko 535W Tiger Pro 72HC Mono Facial Module
                    </a>
                  </h3>
                </div>
              </div>

              <div className="blog-card">
                <a>
                  <img
                                     src={product3}

                    alt="Cheetah Plus HC 78M 400Watt Mono Perc Half Cell Module"
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a className="blog-category">Electronics</a>

                  <h3>
                    <a className="blog-title">
                      Cheetah Plus HC 78M 400Watt Mono Perc Half Cell Module
                    </a>
                  </h3>
                </div>
              </div>

              <div className="blog-card">
                <a>
                  <img
                                        src={product4}

                    alt="Inverex 5kw NitroX Hybrid Inverter"
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a className="blog-category">Electronics</a>

                  <h3>
                    <a className="blog-title">
                      Inverex 5kw NitroX Hybrid Inverter
                    </a>
                  </h3>
                </div>
              </div>

              <div className="blog-card">
                <a>
                  <img
                                        src={product5}

                    alt="Inverex 150w Mono PERC Inverperfect INV-150"
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a className="blog-category">Electronics</a>

                  <h3>
                    <a className="blog-title">
                      Inverex 150w Mono PERC Inverperfect INV-150
                    </a>
                  </h3>

                  <p className="blog-meta">
                    By <cite>Mr Pawar</cite> /
                    <time datetime="2022-03-15">Mar 15, 2022</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-last-container">
          <img src="./assets/images/banner.png" alt="" />
          <img src="./assets/images/banner2.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
