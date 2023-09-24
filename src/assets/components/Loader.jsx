import React from "react";
import "../css/loader.css";
import { useSelector } from "react-redux";
const Loader = () => {
  const { loading } = useSelector((state) => state.rootReducer);
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="w-10 h-10 animate-spin border-x-2 border-solid border-black rounded-full"></div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
