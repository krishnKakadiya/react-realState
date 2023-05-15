import React from "react";


import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';




import "./Hero.css";
import Heroimg from "../../../public/assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter align-e hero-container">
      {/* left side */}
        <div className="flexColStart hero-left">
        <div className="hero-title">
        <div className="orange-circle">

        </div>
          <h1>
            Discover <br />
            Most Suitable <br /> Propery
          </h1>
        </div>

        <div className="hero-des flexColStart">
          <span>Find variety of properties that suit you very easilty</span>
          <span>Forget all difficulties in finding aresidence for you</span>

        </div>

        {/* <div className="flexCenter search-bar">
         <HiLocationMarker color="var(--blue)" size={25} /> 
         <input type="text" size={29} />
         <button className="button">
          Search
         </button>
        </div> */}
        <div className="a-center">
        <HiLocationMarker color="var(--blue)" size={24}/>
        <input type="text" name="text" className="input" placeholder="Search your area"></input>
        <button className="button-s">Search</button>

        </div>

      

        <div className="flexCenter stats">
           
          <div className="flexColStart stat">
          <span>
            <CountUp start={8000} end={9000} duration={4}/>
            <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>

          </div>
          <div className="flexColStart stat">
          <span>
            <CountUp start={1920} end={2000} duration={4}/>
            <span>+</span>
            </span>
            <span className="secondaryText">Happy customer</span>

          </div>
          <div className="flexColStart stat">
          <span>
            <CountUp end={28 } />
            <span>+</span>
            </span>
            <span className="secondaryText">Award winning</span>

          </div>
        </div>


        </div>
        {/* right side\\ */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={Heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
