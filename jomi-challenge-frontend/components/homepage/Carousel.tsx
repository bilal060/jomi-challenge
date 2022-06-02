import React from 'react'
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Styles from "./Carousel.module.css";

function Carousel() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className={Styles.partnerSection}>
      <h3>Subscribing Institutions:</h3>
      <Slider {...settings}>
        <div>
          <Image layout="responsive" src="/slide-one.png" width={80} height={35} alt="left-column" />
        </div>
        <div>
          <Image layout="responsive" src="/slide-two.png" width={80} height={35} alt="left-column" />
        </div>
        <div>
          <Image layout="responsive" src="/slide-three.png" width={80} height={35} alt="left-column" />
        </div>
        <div>
          <Image layout="responsive" src="/slide-four.png" width={80} height={35} alt="left-column" />
        </div>
        <div>
          <Image layout="responsive" src="/slide-one.png" width={80} height={35} alt="left-column" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel