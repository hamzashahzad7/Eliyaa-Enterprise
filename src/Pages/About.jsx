import React from "react";
import '../assets/css/about.css'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'


const About = () => {
  return (
    <>
      {/* <!-- */}
      {/* - MAIN */}
      {/* --> */}
      <main>
        {/* <!-- first section --> */}
        <div className="main-first-container">
          <img src={about1} alt="" />
          <div className="main-text-section">
            <h1>Eliyaa Enterprises</h1>
            <p>
              Eliyaa Enterprises is one of the leading photovoltaic distributors
              worldwide. The owner-managed and self-financed company offers a
              wide range of products for PV installers: solar modules,
              inverters, photovoltaic mounting systems, self-consumption
              systems, e-mobility, PV installation monitoring, and accessories.
              Eliyaa Enterprises attaches great importance to providing its customers
              and project partners with sound advice and high product quality.
              Only high-quality components are included in the photovoltaic
              wholesaler’s product range. The portfolio includes solar modules
              from the following manufacturers: Jinko, Trina, Longi, Canadian,
              Znshine, JA Solar, Max Power, and many more. Brands for the areas
              of inverters, optimization, storage solutions, and e-mobility:
              Fronius, SMA, Sungrow, Inverex, Growatt, Voltronic, INVT, and many
              more.
            </p>
          </div>
        </div>
        {/* <!-- second section --> */}

        <div className="main-first-container">
          <div className="main-text-section">
            <h1>OUR VISION</h1>
            <p>
              We believe in the growth of green, clean and sustainable energies.
              Over the last few decades, sustainable energy has evolved out of
              the incubation process and has emerged as an economically
              competitive, environmentally superior, efficient, clean and stable
              energy source. We understand that solar energy is evolving as a
              key source of energy supply technologies and can make a major
              contribution to the potential energy mix around the world. We are
              entirely committed to contributing to innovations.
            </p>
          </div>
          <img src={about2} alt="" />
        </div>
      </main>
    </>
  );
};

export default About;
