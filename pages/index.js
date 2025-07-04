"use client";
import React, { useState, useEffect } from "react";
import { SeoMeta } from "@/components/common/Meta";
import Header from "@/components/common/Header";
import { Banner } from "@/components/Banner";  
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { WhyClickNEvent } from "@/components/WhyClickNEvent";
import { Blog } from "@/components/Blog";
import Card from "@/components/Card/Card";
import Faqs from "@/components/Faqs";
import Footer from "@/components/common/Footer";
import { fetchData } from "./api/api";

export default function Home() {
  const [serviceData, setServiceData] = useState([]);
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const serviceResponse = await fetchData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/event-types?lang=en`
      );
      setServiceData(serviceResponse.data);

      const vendorResponse = await fetchData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories?lang=en`
      );
      setVendorData(vendorResponse.data);
    };
    getData();
  }, []);

  return (
    <>
      <SeoMeta title="Click N Event" description="" keywords="" />
     <div className="main_container">
       <Header showTopHeader={true} />
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
              <Card
                heading={"Services"}
                services={serviceData}
                path={"services"}
              />
              <Card
                heading={"Vendors"}
                services={vendorData}
                path={"vendors"}
              />
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
}
