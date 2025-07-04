import React from "react";
import Footerlogo from "@/assets/images/footerlogo.svg";
import email from "@/assets/images/icons/email.png";
import phone from "@/assets/images/icons/phone.png";
import footerpin from "@/assets/images/icons/footerpin.png";
import socialricons from "@/assets/images/icons/socialricons.png";
import footertopimage from "@/assets/images/footertopimage_bak.png";
import Image from "next/image";




function Footer() {
  return (
    <>
      <section className="footer-top_wrapper">
        <img src={footertopimage.src} alt="creative agency preview" />
      </section>
      <footer className="footercontainer">
        <div className="subscribe-main-wrapper">
          <section className="subscribe-section">
            <div className="subscribe-content">
              <h3>Join 2000+ subscribers</h3>
              <p className="subtitle">
                Never miss any <strong>News</strong>, and{" "}
                <strong>Insight</strong>
              </p>
              <p className="description">
                Get notifications about latest news, insights, tips and updates.
              </p>
              <form className="subscribe-form">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter your mail ID" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>

       <div className="footer">
                 <div className="footer-container">
                   <div className="footer-left-column">
                     <div className="footer-logo">
                       <img src={Footerlogo.src} alt="Logo" />
                     </div>
                     <p className="footer-desc">
                       Click 'N' Event has a wide database of vendors dealing in
                       different categories with their ratings, reviews, price range,
                       and our own internal rating system to help you making an
                       informed decision.
                     </p>
                   </div>
                   <div className="footer-right-column">
                     <div className="footer-column">
                       <h4>Top Categories</h4>
                       <ul>
                         <li><a href="#">Bakers</a></li>
                         <li> <a href="#">Florists</a> </li>
                         <li> <a href="#">Caterers</a></li>
                         <li><a href="#">Banquet Halls</a></li>
                       </ul>
                     </div>
       
                     <div className="footer-column">
                       <h4>Quick Links</h4>
                       <ul>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Contact</a></li>
                         <li><a href="#">Become a Vendor</a></li>
                       </ul>
                     </div>
       
                     <div className="footer-column">
                       <h4>Contact Us</h4>
                       <ul className="contact-info">
                         <li>
                           <Image src={email} alt="email" /> <a href="#"> contact@clicknevent.com</a>
                         </li>
                         <li>
                           <Image src={phone} alt="phone" /> <a href="#"> +91 98 9898 9898</a>
                         </li>
                         <li className="address">
                           <Image src={footerpin} alt="footerpin" /><a href="#"> Abc Street
                           <br />
                           XYZ Location - 123456</a>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
       
                 <div className="footer-bottom">
                   <p>&copy; 2025 ClickNEvent.com All rights reserved.</p>
                   <ul>
                     <li>
                       <a href="#">Privacy Policy</a>
                     </li>
                     |
                     <li>
                       <a href="#">Terms of Use</a>
                     </li>
                   </ul>
                   <div className="social-icons">
                     <img src={socialricons.src} alt="social icon" />
                   </div>
                 </div>
               </div>
      </footer>
    </>
  );
}

export default Footer;
