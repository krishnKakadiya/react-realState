// import React from 'react';
// import "./Residencies.css";

// import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
// import data from './../../utils/slider';
// import { sliderSettings } from '../../utils/Common';

// const Residencies = () => {
//     const mystyle = {
//         marginRight: "2rem",
//         width: "5px",

//       };

//   return (
//     <>

//     {/* <Slider /> */}
//     <section className="r-wrapper">
//     <div className="paddings innerWidth r-container">
//     <div className="r-head flexColStart">
//         <span className='orangeText'>Besst Choices</span>
//         <span className='primaryText'>Popular Residencies</span>
//     </div>
// <div className="card-slider">
//     <div className="swiper-wrapper">
//         <div className="swiper-slide">
//         </div>
//         <div className="swiper-slide">
//         </div>
//         <div className="swiper-slide">
//         </div>
//     </div>

//     <div className="swiper-button-next"></div>
//     <div className="swiper-button-prev"></div>
// </div>

//     <Swiper  className='card-slider' style={mystyle} {...sliderSettings}>
//   {data.map((card, i) => (
//     <SwiperSlide  key={i}>
//       <div className="flexColStart r-card">
//         <img src={card.image} alt="home" />
//         <span className="secondaryText r-price">
//           <span style={{ color: "orange"}}>$</span>
//           <span>{card.price}</span>
//         </span>

//        <span className="primaryText">{card.name}</span>
//         <span className="secondartyText">{card.detail}</span>
//       </div>
//     </SwiperSlide>
//       ))}
//   </Swiper>
//     </div>
//  </section>
//     </>
//   )
// }

// export default Residencies;

import React from "react";
import "./Residencies.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
data;
// import "swiper.css";
import data from "./../../utils/slider";
import { sliderSettings } from "../../utils/Common";

// import Slider from './slider';

const Residencies = () => {
  // const mystyle = {
  //   marginRight: "2rem",
  //   width: "5px",
  // };

  return (
    <>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          {/* <div className="r-head flexColStart">
            <span className="orangeText">Besst Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div> */}
          <Swiper className="card-slider" >
        {data.map((card, i) => (
          <SwiperSlide   style={{ height: '400px', direction: 'rtl', overflow: 'hidden' }} key={i}>
            <div className="flexColStart r-card">
              <img src={card.image} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondartyText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


          {/* <Swiper >
            {data.map((card, i) => (

              <SwiperSlide className="" key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondartyText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </section>
    </>
  );
};

export default Residencies;
