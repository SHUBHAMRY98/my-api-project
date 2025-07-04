"use client";

import React, { useState, useEffect } from "react";
// import "./styles.module.css";
import { Navigation } from "@/components/Navigation";
import Faqs from "@/components/common/Faqs/index";
import Footer from "@/components/common/Footer/index";
import vendorimage from "@/assets/images/william-2_15_48670.png";
import locator from "@/assets/images/icons/locator 2 1.png";
import ad2 from "@/assets/images/ad2.png";
import ratestar from "@/assets/images/icons/Vector.svg";
import phoneicon from "@/assets/images/icons/phoneIcon.svg";
import chaticon from "@/assets/images/icons/chatIcon.svg";
import galleryicon from "@/assets/images/icons/galleryIcon.svg";
import shortlist from "@/assets/images/icons/shortlistIcon.svg";
import write from "@/assets/images/icons/writeIcon.svg";
import share from "@/assets/images/icons/share.png";
import { SeoMeta } from "@/components/common/Meta";
import indoor from "@/assets/images/icons/indoor.svg";
import outdoor from "@/assets/images/icons/outdoor.svg";
import arrows from "@/assets/images/icons/arrows1.png";
import addtocart from "@/assets/images/icons/add-to-cart 1.png";
import thegrandream from "@/assets/images/rajwada.jpg";
import granddream from "@/assets/images/grand-dreams-mayapuri-wedding-banquet-hall-in-west-delhi-4.png";
import starland from "@/assets/images/starland_banquets_1740473117151.png";
import william from "@/assets/images/william-2_15_48670 (1).png";
import reviews from "@/assets/images/reviews2.png";
import Header from "@/components/common/Header";
import VenueImage from "@/assets/images/venue.png";
import KwalityImage from "@/assets/images/kwalitycatering.png";
import DecorationImage from "@/assets/images/bak/wedding-3.png";
import DjImage from "@/assets/images/djandme.png";
import PhotoraphyImage from "@/assets/images/bak/wedding-2.png";





// Mock data to simulate the image content
const eventDetails = {
  type: "Birthday Party",
  location: "Delhi",
  date: "18 March 2025",
  guests: "50 - 60 People",
  budget: "1 Lakh - 1.25 Lakh",
  foodPreference: "Vegetarian",
};

// Initial services data with a default quantity
const initialServices = [
  {
    id: 1,
    category: "Venue",
    name: "The Grand Dreams Luxury Venue",
    description: "Mayapuri, Delhi",
    basePrice: 40000,
    quantity: 1,
    image: VenueImage.src, // imported image
  },
  {
    id: 2,
    category: "Food",
    name: "Kwality Catering",
    description: "Veg",
    basePrice: 40000,
    quantity: 1,
    image: KwalityImage.src, // Placeholder image path
  },
  {
    id: 3,
    category: "Decorations",
    name: "ABC Decorations",
    description: "Ballons, lighting and LED lights",
    basePrice: 10000,
    quantity: 1,
    image: DecorationImage.src, // Placeholder image path
  },
  {
    id: 4,
    category: "Entertainment & Music",
    name: "DJ & Me",
    description: "Full sound & Music System",
    basePrice: 8000,
    quantity: 1,
    image: DjImage.src, // Placeholder image path
  },
  {
    id: 5,
    category: "Photography",
    name: "Magic Studio",
    description: "Photos and Drone",
    basePrice: 7000,
    quantity: 1,
    image: PhotoraphyImage.src, // Placeholder image path
  },
];

function VendorComparison() {
  const [services, setServices] = useState(initialServices);
  const [summary, setSummary] = useState({
    subtotalItems: 0,
    venue: 0,
    food: 0,
    decorations: 0,
    music: 0,
    photography: 0,
    billTotal: 0,
    taxes: 0,
    grandTotal: 0,
  }); // Function to calculate summary whenever services change

  useEffect(() => {
    let currentSubtotalItems = 0;
    let venueTotal = 0;
    let foodTotal = 0;
    let decorationsTotal = 0;
    let musicTotal = 0;
    let photographyTotal = 0;

    services.forEach((service) => {
      const itemTotal = service.basePrice * service.quantity;
      currentSubtotalItems += itemTotal; // Distribute totals by category for the summary breakdown

      if (service.category === "Venue") venueTotal += itemTotal;
      if (service.category === "Food") foodTotal += itemTotal;
      if (service.category === "Decorations") decorationsTotal += itemTotal;
      if (service.category === "Entertainment & Music") musicTotal += itemTotal;
      if (service.category === "Photography") photographyTotal += itemTotal;
    });

    const billTotal = currentSubtotalItems; // Assuming subtotal items is the bill total before taxes
    const taxes = billTotal * 0.18; // 18% tax as per image
    const grandTotal = billTotal + taxes;

    setSummary({
      subtotalItems: currentSubtotalItems.toLocaleString(),
      venue: venueTotal.toLocaleString(),
      food: foodTotal.toLocaleString(),
      decorations: decorationsTotal.toLocaleString(),
      music: musicTotal.toLocaleString(),
      photography: photographyTotal.toLocaleString(),
      billTotal: billTotal.toLocaleString(),
      taxes: taxes.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }), // Format taxes
      grandTotal: grandTotal.toLocaleString(),
    });
  }, [services]); // Recalculate when services state changes

  const handleQuantityChange = (id, change) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, quantity: Math.max(1, service.quantity + change) } // Ensure quantity doesn't go below 1
          : service
      )
    );
  };

  const handleRemoveService = (id) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== id)
    );
  };

  return (
    <>
   
       <SeoMeta title="Click N Event | Vendor Comparison" description="" keywords="" /> 
      {/* Header component as per your existing structure */}
    <Header showTopHeader={true} />
    <div className="comparison-container">

      <div className="main-container">
        <div className="content-area">
          <div className="vendor-comparison-section">
            <p className="section-title">Vendor Comparison</p>
            <div className="comparison-grid">

            <div className="comparison-block">
              
              <div className="vendor-card-main">
                
                <p className="vendor-name">Radiance Tanya Farms</p>
                <p className="vs">VS</p>
                <p className="vendor-name">Rajawada Banquet Hall</p>
                
                <button className="add-compare-button">
                  Add More To Compare
                </button>
              </div>


              <div className="comparison-table-header">
                <p className="customer-rating-label">Customer Rating</p>
                <p className="price-label">Price</p>
                <p className="areas-available-label">Areas Available</p>
                <p className="room-count-label">Room Count</p>
                <p className="catering-policy-label">Catering Policy</p>
              </div>
            </div>


            <div className="comparison-block">
              <div className="vendor-card">

             
                <img src={thegrandream.src} alt="Radiance Tanya Farms" className="vendor-main-image" />
               
               
               <div className="vendor-firm-check">
                <p className="vendor-firm-name">Radiance Tanya Farms</p>
                
                <div className="firm-check"></div>
                </div>
                <p className="recommendation-firm-location">Karol Bagh, Delhi</p>
              </div>

              <div className="vendor-details-column">
                <div className="rating-row">
                  <p><span>⭐</span> 4.5 (11 reviews)</p>
                </div>

                <div className="price-value">
                <p >Veg | <span> ₹ 1500/ </span> plate</p>
                <p >Non-veg | <span> ₹ 1k / </span> complete</p>
                </div> 
                
                <div className="areas-row">
                  <p>
                      <img src={indoor.src} alt="Indoor" className="area-icon"/>
                      Indoor - 125 Seating, 350 Floating
                  </p>
                  <p>
                      <img src={outdoor.src} alt="Lawn" className="area-icon" />
                      Lawn - 500 Seating, 1200 Floating
                  </p>
                </div>
                <p className="room-count-value">7</p>
                <p className="catering-policy-value">
                  Inhouse and outside catering allowed
                </p>
                <button className="save-continue-button">
                  Save & Continue →
                </button>
              </div>
              </div>
           
            
            <div className="comparison-block">
              <div className="vendor-card">
                <img
                  src={starland.src}
                  alt="Rajawada Banquet Hall"
                  className="vendor-main-image"
                />


               <div className="vendor-firm-check">
                <p className="vendor-firm-name">Rajwada Banquet Hall</p>
                
                <div className="firm-check"></div>
                </div>
                <p className="recommendation-firm-location">Rohini, Delhi</p>
              </div>
              
              <div className="vendor-details-column">
                <div className="rating-row">
                  
                  <p><span>⭐</span> 4.5 (11 reviews)</p>
                </div>
                <div className="price-value">
                <p >Veg | <span> ₹ 1500/</span> plate</p>
                <p >Non-veg | <span> ₹ 1k /</span> complete</p>
                </div>
                <div className="areas-row">
                  <p>
                      <img src={indoor.src} alt="Indoor" className="area-icon" />
                      Indoor - 200 Seating, 500 Floating
                  </p>
                  <p>
                      <img src={outdoor.src} alt="Lawn" className="area-icon" />
                      Lawn - 500 Seating, 1500 Floating
                  </p>
                </div>
                <p className="room-count-value">9</p>
                <p className="catering-policy-value">
                  Inhouse and outside catering allowed
                </p>
                <button className="save-continue-button">
                  Save & Continue →
                </button>
              </div>
            </div>

            </div>
            </div>
          </div>


          <div className="recommendation-section">
            <p className="section-title">Click 'N' Event Recommendation</p>
            <div className="recommendation-card">

              <div class="card-container">
                 <img src={thegrandream.src} alt="Rajawada Banquet Hall" className="recommendation-image" />
                  
               
                    <div class="top-right-icon">
                       <img src={ad2.src} alt="Radiance Tanya Farms" className="icon1" />
                    </div>
                  
                  
                    <div class="bottom-left-icon">
                      <img src={arrows.src} alt="Radiance Tanya Farms" className="icon2" />
                    </div>
                  
                  
                    <div class="bottom-right-icon">
                     <img src={addtocart.src} alt="Radiance Tanya Farms" className="icon3" />
                    </div>
                    </div>

                 {/* <img src={ad2.src} alt="Radiance Tanya Farms" className="icon1" />
              <img src={granddream.src} alt="Rajawada Banquet Hall" className="recommendation-image" />
               <img src={arrows.src} alt="Radiance Tanya Farms" className="icon2" />
                <img src={addtocart.src} alt="Radiance Tanya Farms" className="icon3" />
                */}


              <div className="card-content">
              <div className="recommendation-info">
                <p className="recommendation-name">Rajawada Banquet Hall</p>
                <p className="recommendation-location"><img src={locator.src} alt="Indoor" className="area-icon"/> Karol Bagh, Delhi</p>
                </div>
                <div className="recommendation-details">
                  <p className="rating-text"><img src={reviews.src} alt="Indoor" className="area-icon"/>Very Good (90 reviews)</p>
                  <p className="capacity-text">
                      <img src={indoor.src} alt="Indoor" className="area-icon"/>
                      Indoor Hall, Marriage Hall
                  </p>
                </div>
                </div>

                <p className="estimated-cost">Estimated cost: <span>₹45,000</span></p>
               
              </div>

                 <a href="#" className="suggestion-link">
                  Why Click 'N' Event <span>Recommendation?</span>
                </a>
            </div>

          

          </div>
         </div>
      {/* FAQs and Footer are outside the main content wrapper */}
      <Faqs />
      <Footer />
 
    </>
  );
}

export default VendorComparison;
