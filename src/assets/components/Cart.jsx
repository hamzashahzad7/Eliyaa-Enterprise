import React from "react";
import "../css/cart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ isShowing, setShowing }) => {
  const closeHandler = () => setShowing(!isShowing);
  const { items } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  const DeleteHandler = (selectedId) => {
    try {
      dispatch({
        type: "delete_product",
        payload: selectedId,
      });
      toast.success("Item removed from Cart");
    } catch (err) {
      console.log(`Error : ${err}`);
      toast.warning("Something went wrong");
    }
  };

  return (
    <>
      <div className={`cart ${isShowing && "isShowing"}`}>
        <div className="w-full flex justify-between items-center">
          <button onClick={closeHandler}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="flex items-center gap-4">
            <h2 className="font-bold">Cart</h2>
            <ion-icon name="bag-handle-outline"></ion-icon>
          </div>
        </div>

        <h1 className="w-full text-center uppercase text-md italic">
          Cart Items
        </h1>

        <div className="my-6 space-y-8 flex flex-col justify-start items-start">
          {items.map((items, index) => {
            return (
              <>
                <div className="w-full flex justify-between items-center gap-2">
                  <div className="text-xs">
                    <span className="mr-2">{index + 1}</span>
                    {items.name}
                  </div>

                  <div onClick={() => DeleteHandler(items.id)}>
                    <i class="fa-solid fa-trash text-red-400 text-md transition-all duration-300 hover:text-red-600 cursor-pointer"></i>
                  </div>
                </div>
              </>
            );
            // <div></div>
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
