import React  from "react";
import "../css/cart.css";

const Cart = ({ isShowing, setShowing }) => {
  const closeHandler = () => setShowing(!isShowing);
  return (
    <>
      <div className={`cart ${isShowing && "isShowing"}`}>
        <button onClick={closeHandler}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h2>Cart</h2>
        <p>Products</p>
        <div className="cart-products-grid"></div>
      </div>
    </>
  );
};

export default Cart;
