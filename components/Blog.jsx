import React from "react";
import enjoy from "../assets/images/2.png"
import wedding1 from "../assets/images/wedding-1.png"
import wedding2 from "../assets/images/wedding-2.png"
import wedding3 from "../assets/images/wedding-3.png"
import ArrowIcon from "../assets/images/ArrowDownIcon"
import Image from "next/image";

const data=[
  {image:wedding1 , date:"February 27, 2025", heading: [
      "Hiring vendors for your wedding?",
      "Some useful tips.",
    ], },
{image:wedding2 , date:"February 20, 2025", heading: [
      "Hiring vendors for your wedding?",
      "Some useful tips.",
    ],},
{image:wedding3 , date:"February 13, 2025", heading: [
      "Hiring vendors for your wedding?",
      "Some useful tips.",
    ], },
]
export const Blog = () => {
  return (
    <div className="blog">

       <div className="enjoy">
      <img src={enjoy.src} alt="enjoy" />
    </div>
    
    <div className="blog-heading">
      <p className="blog-heading-text">
        We're here to help you with 
      <br /> heaps of insight and tips
      </p>
    </div>

    <div className="blog-card">
      {
        data.map((item, index)=>(
         <div className="blog-item" key={index}>
          <div className="blog_image_wrapper">
            <img src={item.image.src} alt="wedding" />
          </div>
          <p className="date">{item.date}</p>
          <div className="blog_heading_wrapper">
          <p className="blog-text">{item.heading[0]}</p>
           <p className="blog-text">{item.heading[1]}</p>
           </div>
           <div className="text-arrow-wrapper">
            {/* <p className="read-more">Read More</p> */}
            {/* <img src={arrowIcon} alt="arrow" /> */}
            <a href="#" className="read-more">Read More </a>
           
           </div>
         </div> 
        ))
      }
    </div>
      {/* <p className="we-re-here-to-help">
        We&#39;re here to help you with <br />
        heaps of insight and tips
      </p>

      <div className="overlap-7">
        <img
          className="img-2"
          alt="Img"
          src="https://c.animaapp.com/7iaAc51t/img/60f02a4372175af20c25016c-indian--intimate-wedding@2x.png"
        />

        <img
          className="element-MARISSA-HERB"
          alt="Element MARISSA HERB"
          src="https://c.animaapp.com/7iaAc51t/img/1086-marissa-herb-submission-d8819964f9cc4bb7916515660bd54b23@2x.png"
        />

        <img
          className="olivia-daniel"
          alt="Olivia daniel"
          src="https://c.animaapp.com/7iaAc51t/img/olivia-daniel-26-7d7299dfca974aa087c205adb10b2ff3@2x.png"
        />

        <div className="text-wrapper-11">February 27, 2025</div>

        <div className="text-wrapper-12">February 20, 2025</div>

        <div className="text-wrapper-13">February 13, 2025</div>
      </div>

      <p className="hiring-vendors-for">
        Hiring vendors for your wedding? <br />
        Some useful tips.
      </p>

      <p className="hiring-vendors-for-2">
        Hiring vendors for your wedding? <br />
        Some useful tips.
      </p>

      <p className="hiring-vendors-for-3">
        Hiring vendors for your wedding? <br />
        Some useful tips.
      </p>

      <div className="text-wrapper-14">Read More</div>

      <img
        className="arrow"
        alt="Arrow"
        src="https://c.animaapp.com/7iaAc51t/img/arrow-1-2.svg"
      />

      <div className="text-wrapper-15">Read More</div>

      <img
        className="arrow-2"
        alt="Arrow"
        src="https://c.animaapp.com/7iaAc51t/img/arrow-1-2.svg"
      />

      <div className="text-wrapper-16">Read More</div>

      <img
        className="arrow-3"
        alt="Arrow"
        src="https://c.animaapp.com/7iaAc51t/img/arrow-1-2.svg"
      /> */}
    </div>
  );
};
