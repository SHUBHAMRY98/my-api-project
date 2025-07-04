"use client"
import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import Image from "next/image";
import { Blog } from "./Blog";
import { HowItWorks } from "./HowItWorks";
import { Navigation } from "./Navigation";
import { Testimonials } from "./Testimonials";
import { WhyClickNEvent } from "./WhyClickNEvent";
import Card from "./Card/Card";
import { services, vendors } from "./Card/CardData";
import headerbanner from "../assets/images/headerbanner.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Faqs from "./common/Faqs";
import Footer from "./common/Footer";
import Header from "./common/Header"
import { fetchData } from "@/pages/api/api";

export const Homepage = () => {
  //  const [showTopHeader,setShowTopHeader]=useState(true)
  const [serviceData, setServiceData] = useState([]);
  const [vendorData,setVendorData]=useState([]);

  const [showIcon, setShowIcon] = useState(true);
   

  const handleRemove = () => {
    setShowIcon(false);
  };


  useEffect(() => {
    
    const getData = async () => {
      // const response = await fetchData('https://clickevent.onrender.com/api/event-types?lang=en');
      // setData(response);
      // console.log(response);

      // const sorted = response.data.sort((a, b) => a.display_order - b.display_order);
// const firstFour = sorted.slice(0, 4);
    //  setServiceData(firstFour);   
      const serviceResponse=await fetchData('https://clickevent.onrender.com/api/event-types?lang=en')  
      setServiceData(serviceResponse.data);
       
      const vendorResponse=await fetchData('https://clickevent.onrender.com/api/categories?lang=en')
      setVendorData(vendorResponse.data)
    };
    getData();
  }, []);

  //  console.log(serviceData);
  return (
    <>
      <div className="main_container" >
        {/* <div className="header_banner">
          {
         showIcon && (
          <div className="add-container">
                <Image src={headerbanner} alt="header banner preview" />
          < CancelRoundedIcon onClick={handleRemove} sx={{
            position:"absolute",
            right:"10px",
            cursor:"pointer"
          }} />
          </div>
         )
           }
        </div> */}
        {/* <div className="fixed_header"> */}
       
         <Header showTopHeader={true} />
        {/* <Navigation /> */}
        {/* </div> */}
        <Banner />

        <div className="rectangular-section">
          <div className="service_contrainer">
            <div className="rectangular-text">
              <div className="left_side_content">
                <p className="what-are-you-looking">
                  What are you <br />
                  looking for?
                </p>

                <p className="let-us-know-what-are">
                  Let us know what are you looking for and we
                  <br /> will guide you with our expert advise and right
                  <br /> choice of vendors / services in your budger.
                </p>

                <button className="explore-btn">Explore More</button>
              </div>
            </div>
            <div className="service_vendor_wrapper">
              <div className="servive-and-vendor">
                <Card heading={"Services"} services={serviceData} path={"services"} />
                <Card heading={"Vendors"} services={vendorData} path={"vendors"}/>
              </div>
            </div>
          </div>
        </div>

        <WhyClickNEvent />
        <HowItWorks />
        <Blog />

        <Testimonials />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};
