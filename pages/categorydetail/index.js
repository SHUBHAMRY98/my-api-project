import React from "react";
// import "./styles.module.css";
import { Navigation } from "../../components/Navigation";
import Faqs from "../../components/common/Faqs/index";
import Footer from "../../components/common/Footer/index";
import Image from "next/image";
import vendorimage from "../../assets/images/william-2_15_48670.png";
import locator2 from "../../assets/images/icons/locator 2 1.png";
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
function CategoryDetail() {
  return (
    <>
      <SeoMeta
        title="Click N Event | Vendors Detail"
        description=""
        keywords=""
      />
      <div className="vendor_detail">
        <Header showTopHeader={true} />
        <div className="vendor_detail_body">
          <div className="vendor_image">
            <Image src={vendorimage} alt="vendor_image"></Image>
          </div>
          <div className="vendordetail_description">
            <div className="vendordetailed_desc">
              <div className="vendordetailed_desc_left">
                <p className="vendor_name">The Grand Dreams, Mayapuri</p>
                <div className="vendor_address">
                  <Image src={locator2} alt="location"></Image>
                  <p>New Delhi (View on Map)</p>
                </div>
                <p className="official_address">
                  A-250, Mayapuri Industrial Area, Phase 1-110011
                </p>
                <div className="vendor_contact_button">
                  <button className="vendor_contact">
                    <Image src={phoneicon} alt="phoneicon"></Image>View Contact
                  </button>
                  <button className="vendor_contact_by_message">
                    <Image src={chaticon} alt="phoneicon"></Image>Send Message
                  </button>
                  <button className="vendor_booking">Book Now</button>
                </div>
              </div>

              <div className="vendordetailed_desc_right">
                <div>
                  <div className="vendor_rate">
                    <Image src={ratestar} alt="vendor rate"></Image>
                    <p>4.1</p>{" "}
                  </div>
                  <p className="vendor_totalreview">30 Reviews</p>
                </div>

                <div className="vendor_price_per_unit">
                  <p className="price_text">Starting Price</p>
                  <p className="vendor_unit_price">Rs 2,350 Per Plate</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="vendor_photo_review_and_share">
              <div className="vendor_photos">
                <Image src={galleryicon} alt="galleryIcon"></Image> 32 Photos
              </div>
              <div className="shortlisting">
                <Image src={shortlist} alt="shortlist"></Image> Shortlist
              </div>
              <div className="vendor_review">
                <Image src={write} alt="writing review"></Image>Write a Review
              </div>
              <div className="vendor_photos">
                <Image src={share} alt="share"></Image> Share
              </div>
            </div>
          </div>

          <div className="about_vender">
            <ul>
              <li className="active">Features</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="vendor_total_capacity">
            <p className="capacity_heading">Seating Capacity</p>
             <div className="vendor_indoor_outdoor">
              <div className="indoor_capacity">
                {/* <div className="indoor"> */}
                  <div className="indoor_icon">
                    <Image src={indoor} alt="indoor"></Image> Indoor
                  </div>
                  <p className="total_people">160 People</p>
                {/* </div> */}
                
              </div>
              <div className="outdoor_capacity">
                <div className="indoor_icon">
                 <Image src={outdoor} alt="outdoor"></Image> Outdoor 
                </div>
                <p className="total_people">300 People</p>
              </div>
             </div>

          </div>

          <div className="vendor_all_images_container">
           <div className="vendor_single_image_container"> <Image src={thegrandream} alt="the_grand_dream" /></div>
          <div className="vendor_single_image_container"> <Image src={granddream} alt="granddream" /></div>
          <div className="vendor_single_image_container"> <Image src={starland} alt="starland" /></div>
          <div className="vendor_single_image_container"> <Image src={william} alt="william" /></div>

           <div className="vendor_single_image_container"> <Image src={thegrandream} alt="the_grand_dream" /></div>
          <div className="vendor_single_image_container"> <Image src={granddream} alt="granddream" /></div>
          <div className="vendor_single_image_container"> <Image src={starland} alt="starland" /></div>
          <div className="vendor_single_image_container"> <Image src={william} alt="william" /></div>

           <div className="vendor_single_image_container"> <Image src={thegrandream} alt="the_grand_dream" /></div>
          <div className="vendor_single_image_container"> <Image src={granddream} alt="granddream" /></div>
          <div className="vendor_single_image_container"> <Image src={starland} alt="starland" /></div>
          <div className="vendor_single_image_container"> <Image src={william} alt="william" /></div>
          </div>

          <div className="vendor_overview">
            <p className="vendor_overview_heading">
              Overview
            </p>
            <p className="vendor_overview_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
          </div>

          <div className="vendor_review_section">
         <Image src={reviews} alt="review" />
          </div>
        </div>
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default CategoryDetail;
