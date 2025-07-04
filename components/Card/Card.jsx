import React, { useRef } from "react";
import SwapingCart from "./SwapingCart";
import { useRouter } from 'next/router';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconButton } from "@mui/material";
import Image from "next/image";
function Card({ heading, services,path }) {
  const carouselRef = useRef(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/${path}`);
  };

  const handleNavigation2 = (id) => {
  router.push(`/${path=="vendors"?`vendors/${id}`:`services/${id}`}`);
};

const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

    const groupedServices = chunkArray(services, 4);
  // console.log(groupedServices);
  
  return (
    <div className="section service_and_vendor">
      <div className="section-header">
        <h4>{heading}</h4>
        <div className="view"  >
          <a className="view-more" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
            View All  <IconButton
            sx={{ borderRadius: 2, ":hover": { background: "#ffffff" } }}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="16"
              viewBox="0 0 39 16"
              fill="none"
            >
              <path
                d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 8V9H38V8V7H0V8Z"
                fill="#F47721"
              />
            </svg>
          </IconButton>
          </a>
         
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
       autoPlay={services?.length>2}
        infiniteLoop
      >
         {groupedServices.map((group, i) => (
        <div className="service_banner_container" key={i}>
          {/* {groupedServices?.map((item, index) => ( */}
          
            {group.map((item, index) => (
            <SwapingCart  key={index} {...item} handleNavigation2={handleNavigation2} />
          ))}
        </div>
))}
        {/* <div className="service_banner_container">
          {groupedServices?.map((item, index) => (
            <CardItem  key={index} {...item} handleNavigation2={handleNavigation2} />
          ))}
        </div>
        <div className="service_banner_container">
          {groupedServices?.map((item, index) => (
            <CardItem  key={index} {...item} handleNavigation2={handleNavigation2} />
          ))}
        </div> */}
      </Carousel>
    </div>
  );
}

export default Card;
