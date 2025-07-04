"use client";
import React, { useState, useEffect } from "react";
import Faqs from "@/components/common/Faqs/index";
import Footer from "@/components/common/Footer";
import vendorimage from "@/assets/images/william-2_15_48670.png";
import locator2 from "@/assets/images/icons/locator 2 1.png";
import ratestar from "@/assets/images/icons/Vector.svg";
import phoneicon from "@/assets/images/icons/phoneIcon.svg";
import chaticon from "@/assets/images/icons/chatIcon.svg";
import galleryicon from "@/assets/images/icons/galleryIcon.svg";
import shortlist from "@/assets/images/icons/shortlistIcon.svg";
import write from "@/assets/images/icons/writeIcon.svg";
import share from "@/assets/images/icons/share.png";
import { SeoMeta } from "@/components/common/Meta";
import indoor from "@/assets/images/icons/indoor.svg";
import outdoor from "@/assets/images/icons/outdoor.svg"
import thegrandream from "@/assets/images/the-gran-dreams-mayapuri-vg9qy.png"
import granddream from "@/assets/images/grand-dreams-mayapuri-wedding-banquet-hall-in-west-delhi-4.png"
import starland from "@/assets/images/starland_banquets_1740473117151.png"
import william from "@/assets/images/william-2_15_48670 (1).png"
import reviews from "@/assets/images/reviews2.png"
import Header from "@/components/common/Header";
import VenueImage from "@/assets/images/venue.png";
import KwalityImage from "@/assets/images/kwalitycatering.png";
import DecorationImage from "@/assets/images/william-2_15_48670.png";
import DjImage from "@/assets/images/djandme.png";
import PhotoraphyImage from "@/assets/images/djedge.png";
import Question from "@/assets/images/icons/question.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';



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

function CartPreview() {
  const [services, setServices] = useState(initialServices);
  const [summary, setSummary] = useState({
    subtotalItems: 0,
    venue:0,
    food: 0,
    decorations: 0,
    music: 0,
    photography: 0,
    billTotal: 0,
    taxes: 0,
    grandTotal: 0,
  });

  // Function to calculate summary whenever services change
  useEffect(() => {
    let currentSubtotalItems = 0;
    let venueTotal =0;
    let foodTotal = 0;
    let decorationsTotal = 0;
    let musicTotal = 0;
    let photographyTotal = 0;

    services.forEach(service => {
      const itemTotal = service.basePrice * service.quantity;
      currentSubtotalItems += itemTotal;

      // Distribute totals by category for the summary breakdown
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
      taxes: taxes.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }), // Format taxes
      grandTotal: grandTotal.toLocaleString(),
    });
  }, [services]); // Recalculate when services state changes

  const handleQuantityChange = (id, change) => {
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === id
          ? { ...service, quantity: Math.max(1, service.quantity + change) } // Ensure quantity doesn't go below 1
          : service
      )
    );
  };

  const handleRemoveService = (id) => {
    setServices(prevServices => prevServices.filter(service => service.id !== id));
  };


  return (
    <>
       <SeoMeta title="Click N Event | Cart Preview" description="" keywords="" /> 
      {/* Header component as per your existing structure */}
      <Header showTopHeader={true} />

      <div className="cart-preview-container">
        {/* Top Header Section for "Your Event Plan - Cart / Preview" */}
        <div className="cart-page-header">
          <p className="cart-header-title">Your Event Plan - Cart / Preview</p>
          <img src={Question.src}  width={52} height={52} objectFit="cover" />
        </div>

        {/* Event Details Section */}
        <div className="event-details-grid1">
          <div className="detail-card">
            <p className="detail-value">🎂 {eventDetails.type}</p>
          </div>
          <div className="detail-card">
            <p className="detail-value">📍 {eventDetails.location}</p>
          </div>

          <div className="detail-card">
            <p className="detail-value">🗓️ {eventDetails.date}</p>
          </div>
        </div>



        <div className="event-details-grid2">

           <div className="detail-card">
            <span className="detail-icon">👥</span> {/* Replace with actual icon */}
            <p className="detail-label">Guests</p>
            <p className="detail-value">{eventDetails.guests}</p>
             </div>

               <div className="detail-card">
            <span className="detail-icon">₹</span> {/* Replace with actual icon */}
            <p className="detail-label">Budget</p>
            <p className="detail-value">{eventDetails.budget}</p>
            </div>

            <div className="detail-card">
            <span className="detail-icon">🍽️</span> {/* Replace with actual icon */}
            <p className="detail-label">Food Preference</p>
            <p className="detail-value">{eventDetails.foodPreference}</p>
             </div>

        </div>



        {/* Main Content Area: Services List and Summary */}
        <div className="main-content-layout">
          <div className="services-list-wrapper">
            {services.map((service) => ( // Use service.id for key
              <div className="service-item-card" key={service.id}>
                <p className="service-item-category">{service.category}</p>
                <div className="service-item-details">

                  <div className="service-image-placeholder" style={{backgroundImage: `url(${service.image})`}}>
                    {/* If using Next.js Image: <Image src={service.image} alt={service.name} width={80} height={80} objectFit="cover" /> */}
                  </div>

                   

                  <div className="service-item-info-card">
                     <div className="service-item-info">
                    <p className="service-item-name">{service.name}</p>
                    <button className="remove-service-button" onClick={() => handleRemoveService(service.id)}>X</button>
                    {/* <FontAwesomeIcon icon="faTrash" style={{ color: '#F47721', marginRight: '10px', fontSize: '30px' }} /> */}
                  
                  </div>

                  <div className="service-item-price-and-quantity"> {/* New wrapper for price & quantity */}
                    <p className="service-item-description">{service.description}</p>
                    <div className="quantity-selector">
                      <button onClick={() => handleQuantityChange(service.id, -1)} disabled={service.quantity <= 1}>-</button>
                      <span>{service.quantity}</span>
                      <button onClick={() => handleQuantityChange(service.id, 1)}>+</button>
                    </div>
                    </div>
                    <div className="service-item-price">
                        <p className="actual-price"> <b className="price-label">Price</b> ₹ {(service.basePrice * service.quantity).toLocaleString()}</p> {/* Display calculated price */}
                    </div>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="order-summary-card">
            <p className="summary-card-title">Summary</p>
            <div className="summary-row-main">
            {/* <div className="summary-row">
              <span>Subtotal (Items)</span>
              <span>₹ {summary.subtotalItems}</span>
            </div> */}
             <div className="summary-row">
              <span>Venue</span>
              <span>₹ {summary.venue}</span>
            </div>
            <div className="summary-row">
              <span>Food</span>
              <span>₹ {summary.food}</span>
            </div>
            <div className="summary-row">
              <span>Decorations</span>
              <span>₹ {summary.decorations}</span>
            </div>
            <div className="summary-row">
              <span>Music</span>
              <span>₹ {summary.music}</span>
            </div>
            <div className="summary-row">
              <span>Photography</span>
              <span>₹ {summary.photography}</span>
            </div>
            <a href="#"><div className="summary-line-divider">Click here for suggestion to make your event better </div></a>

            <div className="bill-details">Bill Details </div>
            <div className="summary-row bold-text">
              <span>Total Ammount</span>
              <span>₹ {summary.billTotal}</span>
            </div>
            <div className="summary-row pink-text">
              <span>Taxes</span>
              <span>₹ {summary.taxes}</span>
            </div>
            <div className="summary-row grand-total-row">
              <span>Grand Total</span>
              <span>₹ {summary.grandTotal}</span>
            </div>

            <button className="checkout-cta-button">Go To Checkout</button>
            {/* <button className="download-proposal-button">Download Proposal</button> */}

            <div className="help-box">
              <p className="help-title">Need Help?</p>
              <p className="chat-expert-label">Chat with our expert</p>
              <button className="chat-now-button">💬 Chat now</button> 
            </div>
          </div>
        </div>
        </div>
      </div>


      <Faqs/>
      <Footer/>
    </>
  );
}

export default CartPreview;