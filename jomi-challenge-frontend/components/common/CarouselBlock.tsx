import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Styles from "./CarouselBlock.module.css";

const CarouselBlock = ({ section }) => {
  //TODO : Complete this component
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
    return(
      <div className={Styles.partnerSection}>
         <h3>Subscribing Institutions:</h3>
         <Slider {...settings}>
            { section[0]?.Item?.map( item => {
              return(
                <div>
                  <a href={ item?.ImageUrl }>
                    <Image layout="responsive" src={ process.env.STRAPI_CMS_URL+""+item?.Image?.data?.attributes?.url } width={80} height={35} alt="left-column" />
                  </a>
                </div>
              )
            })}
          </Slider>
      </div>
    )
};

export default CarouselBlock;
