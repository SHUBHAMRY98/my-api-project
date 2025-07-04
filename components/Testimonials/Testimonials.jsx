import { useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import circle from "../../assets/images/Circle-container.png";
import quote from "../../assets/images/icons/quote.svg";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import Image from "next/image";
const testData = [
  {
    id: 1,
    text: "Click 'N' Event made planning my event effortless! The AI-powered recommendations were spot-on, helping me find the perfect vendors within my budget. The platform is intuitive, fast and incredibly user-friendly. From selecting services to finalizing the proposal, everything was seamless, Highly recommend Click 'N' Event for anyone looking to organize a flawless event!",
    author_name: "Abhishek Roy",
    author_detail: "Inventors Startup Manager - Delhi",
  },
  {
    id: 2,

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    author_name: "Lorem",
    author_detail: "Inventors Startup Manager - Delhi",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    author_name: "Ipsum",
    author_detail: "Inventors Startup Manager ",
  },
];

export const Testimonials = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonial-content-wrapper">
        <p className="testimonial-heading">People Love Click 'N' Event</p>
      </div>

      <div className="image-text-wrapper">
        <div className="circle-container">
          <img src={circle.src} alt="center" />
        </div>

        <div className="testimonials-text">
          <img className="quote" src={quote.src} alt="quote" />
          <Carousel
            ref={carouselRef}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
            autoPlay
            infiniteLoop
          >
            <div className="carousel_wrapper">
              <div className="text-box">
                <p className="text-main">
                  Click 'N' Event made planning my event effortless! The
                  AI-powered recommendations were spot-on, helping me find the
                  perfect vendors within my budget. The platform is intuitive,
                  fast and incredibly user-friendly. From selecting services to
                  finalizing the proposal, everything was seamless, Highly
                  recommend Click 'N' Event for anyone looking to organize a
                  flawless event!
                </p>
              </div>

              <div className="author-group">
                <div className="author_name_detail">
                  <p className="author-name">Abhishek Roy</p>
                  <p className="author-detail">
                    Inventors Startup Manager - Delhi
                  </p>
                </div>
                {/* <div className="arrow_icon">
                  <ArrowCircleLeftOutlinedIcon />
                  <ArrowCircleRightOutlinedIcon />
                </div> */}
              </div>
            </div>
            <div className="carousel_wrapper">
              <div className="text-box">
                <p className="text-main">
                  Click 'N' Event made planning my event effortless! The
                  AI-powered recommendations were spot-on, helping me find the
                  perfect vendors within my budget. The platform is intuitive,
                  fast and incredibly user-friendly. From selecting services to
                  finalizing the proposal, everything was seamless, Highly
                  recommend Click 'N' Event for anyone looking to organize a
                  flawless event!
                </p>
              </div>

              <div className="author-group">
                <div className="author_name_detail">
                  <p className="author-name">Abhishek Roy</p>
                  <p className="author-detail">
                    Inventors Startup Manager - Delhi
                  </p>
                </div>
                {/* <div className="arrow_icon">
                  <ArrowCircleLeftOutlinedIcon />
                  <ArrowCircleRightOutlinedIcon />
                </div> */}
              </div>
            </div>
            <div className="carousel_wrapper">
              <div className="text-box">
                <p className="text-main">
                  Click 'N' Event made planning my event effortless! The
                  AI-powered recommendations were spot-on, helping me find the
                  perfect vendors within my budget. The platform is intuitive,
                  fast and incredibly user-friendly. From selecting services to
                  finalizing the proposal, everything was seamless, Highly
                  recommend Click 'N' Event for anyone looking to organize a
                  flawless event!
                </p>
              </div>
              <div className="author-group">
                <div className="author_name_detail">
                  <p className="author-name">Abhishek Roy</p>
                  <p className="author-detail">
                    Inventors Startup Manager - Delhi
                  </p>
                </div>
                {/* <div className="arrow_icon">
                  <ArrowCircleLeftOutlinedIcon
                    style={{
                      fontSize: "48px",
                      cursor: "pointer",
                      margin: "0 10px",
                    }}
                  />
                  <ArrowCircleRightOutlinedIcon
                    style={{
                      fontSize: "48px",
                      cursor: "pointer",
                      margin: "0 10px",
                    }}
                  />
                </div> */}
              </div>
            </div>
          </Carousel>
          <div className="testimonials_nav_box">
            <IconButton onClick={handlePrev}>
              <ArrowCircleLeftOutlinedIcon sx={{fontSize:"50px", color:"#000000"}}/>
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowCircleRightOutlinedIcon sx={{fontSize:"50px", color:"#000000"}}/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
