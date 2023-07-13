import React, { useState } from "react";
import "../assets/css/contact.css";
import img1 from "../assets/images/contact-map.png";

const Contact = () => {
  const [btnText, setBtnText] = useState("Submit");
  const onSubmit = (e) => {
    e.preventDefault();
    setBtnText("Submitted");
  };

  return (
    <div>
      {/* <!-- */}
      {/* - MAIN */}
      {/* --> */}
      <main className="contact-container">
        <img src={img1} alt="" />
        {/* <!--  */}
        {/* Right Section Form  */}
        {/* --> */}
        <div className="contact-container-form">
          <h3>Contact Us</h3>

          <div className="container-form-inner">
            <div>
              <h2>Address</h2>
              <p>
                Main GT Road, Beside Faisal Bank, Near Darogawala Chock, Lahore
              </p>
            </div>

            <div>
              <h2>Telephone Number</h2>
              <p>Phone: +92 300 7113227</p>
            </div>
          </div>
          {/* <!-- 
          Form Section
         --> */}
          <form className="form">
            <h3>Tell Us About Your Project</h3>

            <label for="">Your Name (required)</label>
            <input type="text" />

            <label for="">Your Email (required)</label>
            <input type="email" />

            <label for="">Your Subject</label>
            <input type="text" />

            <label for="">Your Message</label>
            <textarea></textarea>

            <button className="contact-btn" onClick={onSubmit}>
              {btnText}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
