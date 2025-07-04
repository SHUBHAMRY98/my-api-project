import React from "react";
// import "./style.css";
import notepad from "../../assets/images/icons/notepad 1.png"
import calendar from "../../assets/images/icons/calendar 1.png"
import onlineShop from "../../assets/images/icons/online-shop 1.png"
import voter from "../../assets/images/icons/voter 1.png"
import supermarket from "../../assets/images/icons/supermarket 1.png"
import techSupport from "../../assets/images/icons/tech-support 1.png"
import StepCard from "./StepCard";

 const steps = [
  { number: 1, title: "Tell Us", subtitle: "Your Requirement", icon: notepad },
  { number: 2, title: "Discover", subtitle: "Best fit vendors", icon: calendar },
  { number: 3, title: "Compare", subtitle: "Compare vendors", icon: onlineShop },
  { number: 4, title: "Add", subtitle: "Vendors to your list", icon: voter },
  { number: 5, title: "Book", subtitle: "The vendors", icon: supermarket },
  { number: 6, title: "Support", subtitle: "End-to-End support", icon: techSupport },
];
export const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-work-wrapper">
       <div className="text-wrapper-42">How It Works</div>
       {/* <div className="how-it-works-desc-wrapper"> */}
      <div className="find-everything-you">
        {/* Find everything you need to turn your next event into your best event!
       
        Book Catering, DJ, Bar services, AV equipment, Furnitures, Bands, Unique
        entertainment and more. */}
      <p>Find everything you need to turn your next event into your best event!</p>
      <p>Book Catering, DJ, Bar services, AV equipment, Furnitures, Bands, Unique entertainment and more.</p>

      </div>
      {/* </div> */}

{/* <div className="steps-container">
       <div>

       </div>
</div> */}
      

     <div className="steps-container">
      {steps.map((item, index) => (
        <StepCard key={index} item={item} />
      ))}
    </div>

   

      {/* <div className="overlap-21">
        <div className="rectangle-2" />

        <div className="group-19">
          <div className="group-20">
            <div className="overlap-group-10">
              <div className="text-wrapper-43">Tell Us</div>

              <div className="text-wrapper-44">Your Requirement</div>
            </div>
          </div>

          <img
            className="notepad"
            alt="Notepad"
            src="https://c.animaapp.com/7iaAc51t/img/notepad-1@2x.png"
          />
        </div>

        <div className="group-21">
          <div className="overlap-22">
            <div className="text-wrapper-45">1</div>
          </div>
        </div>
      </div>

      <div className="overlap-23">
        <div className="rectangle-3" />

        <div className="group-22">
          <div className="group-23">
            <div className="overlap-group-11">
              <div className="text-wrapper-43">Discover</div>

              <div className="text-wrapper-44">Best fit vendors</div>
            </div>

            <img
              className="supermarket"
              alt="Supermarket"
              src="https://c.animaapp.com/7iaAc51t/img/supermarket-1@2x.png"
            />
          </div>
        </div>

        <div className="group-21">
          <div className="overlap-24">
            <div className="text-wrapper-46">2</div>
          </div>
        </div>
      </div>

      <div className="overlap-25">
        <div className="rectangle-4" />

        <div className="group-24">
          <div className="group-25">
            <div className="overlap-group-12">
              <div className="text-wrapper-43">Compare</div>

              <div className="text-wrapper-44">Compare vendors</div>
            </div>
          </div>

          <img
            className="img-3"
            alt="Voter"
            src="https://c.animaapp.com/7iaAc51t/img/voter-1@2x.png"
          />
        </div>

        <div className="group-21">
          <div className="overlap-22">
            <div className="text-wrapper-46">3</div>
          </div>
        </div>
      </div>

      <div className="overlap-26">
        <img
          className="rectangle-5"
          alt="Rectangle"
          src="https://c.animaapp.com/7iaAc51t/img/rectangle-67.png"
        />

        <div className="group-26">
          <div className="overlap-27">
            <div className="text-wrapper-43">Add</div>

            <div className="text-wrapper-44">Vendors to your list</div>
          </div>

          <img
            className="online-shop"
            alt="Online shop"
            src="https://c.animaapp.com/7iaAc51t/img/online-shop-1@2x.png"
          />
        </div>

        <div className="group-21">
          <div className="overlap-24">
            <div className="text-wrapper-46">4</div>
          </div>
        </div>
      </div>

      <div className="overlap-28">
        <div className="rectangle-6" />

        <div className="group-27">
          <div className="overlap-29">
            <div className="text-wrapper-43">Book</div>

            <div className="text-wrapper-44">The vendors</div>
          </div>

          <img
            className="img-3"
            alt="Calendar"
            src="https://c.animaapp.com/7iaAc51t/img/calendar-1@2x.png"
          />
        </div>

        <div className="group-21">
          <div className="overlap-22">
            <div className="text-wrapper-46">5</div>
          </div>
        </div>
      </div>

      <div className="overlap-30">
        <div className="rectangle-7" />

        <div className="group-28">
          <div className="group-29">
            <div className="overlap-group-13">
              <div className="text-wrapper-43">Support</div>

              <p className="text-wrapper-44">End - to - End support</p>
            </div>
          </div>

          <img
            className="img-3"
            alt="Tech support"
            src="https://c.animaapp.com/7iaAc51t/img/tech-support-1@2x.png"
          />
        </div>

        <div className="group-21">
          <div className="overlap-24">
            <div className="text-wrapper-46">6</div>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};
