import React from "react";
import '../assets/css/contact.css'
import img1 from '../assets/images/about1.png';

const Contact = () => {
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
              <p>Sector 16 Korangi Industrial area ,Karachi Pakistan</p>
            </div>

            <div>
              <h2>Address E-mail</h2>
              <p>xyz@gmail.com</p>
            </div>

            <div>
              <h2>Telephone Enquiry</h2>
              <p>Hotline 01: (+92 300 920 8250)</p>
            </div>

            <div>
              <h2>Opening Time</h2>
              <p>Open: 10:30 AM - Close 06:30 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          {/* <!-- 
          Icon Section 
        --> */}
          <div>
            <h3>Follow Us</h3>
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
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
