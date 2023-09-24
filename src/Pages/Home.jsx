import solar from "../assets/images/solarPlates.png";
import solar2 from "../assets/images/solarPlates2.png";
import solar3 from "../assets/images/solarPlates3.png";
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
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../utils/Products";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.rootReducer);
  
  const AddtoCart = (selectedIndex) => {
    try {
      dispatch({
        type: "add_product",
        payload: data[selectedIndex],
      });
      toast.success("Product Added", { hideProgressBar: false });
      console.log("items", items);
    } catch (err) {
      toast.warning("Something Went Wrong");
      console.log(`error:${err}`);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        progressStyle={{ backgroundColor: "transparent" }}
      />
      <div>
        <main>
          {/* <!--
      - BANNER
    --> */}

          <div className="banner">
            <div className="container banner-slider">
              <div className="slider-container has-scrollbar">
                <div className="slider-item banner-item">
                  <div className="banner-item-container">
                    <p>Pakistan Largest Solar Product Rande</p>
                    <h4>SOLAR ONLINE SHOP</h4>
                    <p>Warranty Protection And Long Lasting</p>
                    <button>Order Now</button>
                  </div>
                  <img src={solar} alt="" />
                </div>
                <div className="slider-item banner-item">
                  <div className="banner-item-container">
                    <p>Pakistan Largest Solar Product Rande</p>
                    <h4>SOLAR ONLINE SHOP</h4>
                    <p>Warranty Protection And Long Lasting</p>
                    <button>Order Now</button>
                  </div>
                  <img src={solar2} alt="" />
                </div>
                <div className="slider-item banner-item">
                  <div className="banner-item-container">
                    <p>Pakistan Largest Solar Product Rande</p>
                    <h4>SOLAR ONLINE SHOP</h4>
                    <p>Warranty Protection And Long Lasting</p>
                    <button>Order Now</button>
                  </div>
                  <img src={solar3} alt="" />
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
                {data.map((items, index) => {
                  return (
                    <>
                      <div className="blog-card" key={index}>
                        <img
                          src={items.image}
                          alt="Longi 540 Bifacial Hi-Mo5 LR5-72HBD"
                          width="300"
                          className="blog-banner"
                        />

                        <div className="blog-content">
                          <p className="blog-category" href="#a">
                            {items.category}
                          </p>

                          <h3 className="blog-title">{items.name}</h3>
                        </div>

                        <div className="w-full flex items-center justify-center">
                          <button
                            className="px-4 py-1 bg-white text-orange-500 border-[1px] border-solid border-orange-500 my-4 text-xs transition-all duration-300 hover:shadow-lg hover:border-transparent uppercase shadow-slate-200"
                            onClick={() => AddtoCart(index)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="main-last-container">
            <img src="./assets/images/banner.png" alt="" />
            <img src="./assets/images/banner2.png" alt="" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
