import React, { useEffect, useState } from "react";
import girlImage from "../assets/images/girl-image.png";
import lamp from "../assets/images/icons/lamp 1.png";
import chat from "../assets/images/icons/chat 1.png";
import celebration from "../assets/images/icons/celebrating 1.png";
import instore from "../assets/images/icons/in-store-demonstration 1.png";
import booking from "../assets/images/icons/booking 1.png";
// import 'odometer/themes/odometer-theme-default.css';
// import OdometerCounter from "./OdometerCounter";
import Image from "next/image";
import CountUp from 'react-countup';

import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});


export const Banner = () => {
  const [counters, setCounters] = useState({
    customers: 125,
    vendors: 80,
    orders: 125,
  });




  // useEffect(() => {
  //   setInterval(() => {
  //     setCounters((prev) => {
  //       const newCounter = { ...prev };
  //       newCounter.customers = prev.customers + 1;
  //       newCounter.vendors = prev.vendors + 1;
  //       newCounter.orders = prev.orders + 1;
  //       return newCounter;
  //     });
  //   }, 2000);
  // }, []);


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCounters({
  //       customers: 125,
  //       vendors: 200,
  //       orders: 500,
  //     });
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className="bannerContainer">
      <div className="bg-1">
        <div className="content-wrapper">
          <div>
            <p className="a-one-stop-solution">
              <span className="span">A</span>

              <span className="text-wrapper-2">&nbsp;</span>

              <span className="text-wrapper-3">one-stop solution</span>

              <span className="text-wrapper-2">
                {" "}
                <br />
              </span>

              <span className="span">for your events.</span>
            </p>
          </div>
          <p className="lorem-ipsum">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="option-button-wrapper">
            <div className="filter-bar">
              <select className="dropdown" style={{ width: "146px" }}>
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Corporate</option>
              </select>

              <select className="dropdown" style={{ width: "170px" }}>
                <option>50-60 Guests</option>
                <option>100-150 Guests</option>
                <option>200+ Guests</option>
              </select>

              <select className="dropdown" style={{ width: "200px" }}>
                <option>1 Lakh - 1.25 Lakh</option>
                <option>1.25 Lakh - 1.5 Lakh</option>
                <option>1.5 Lakh - 2 Lakh</option>
              </select>
              <button className="search">Search</button>
            </div>
          </div>
          <div className="banner-link">
            <div className="img-li-1">
              <img src={chat.src} alt="chat" />
              <li href="#" className="banner-li banner-li-text1">
                <a href="#">Refer to a friend</a>
              </li>
            </div>
            <div className="img-li-1">
              <img src={lamp.src} alt="lamp" />
              <li className="banner-li ">
                <a href="#">How Click 'N' Events works?</a>
              </li>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="top_right_corner_ellipse">&nbsp;</div>
          <div className="ellipse">
            <div className="banner_preview_wrapper">
              <img src={girlImage.src} alt="girlImage" />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-container">
        <div className="overlap-box1">
          <div className="overlap-content1">
            <img src={celebration.src} alt="celebration" />
            <p className="overlap-content-text1">
               <span className="counter"><CountUp  end={counters.customers} /></span>
              <span>k+</span>
            </p>
            <p className="overlap-content-text2">Customers</p>
          </div>
          <div className="overlap-content2">
            <img src={instore.src} alt="inStore" />
            <p className="overlap-content-text1">
             <span className="counter"> <CountUp  end={counters.vendors} /></span><span>k+</span>
            </p>
            <p className="overlap-content-text2">Vendors</p>
          </div>
          <div className="overlap-content3">
          <img src={booking.src} alt="booking" />
            <p className="overlap-content-text1">
              <span className="counter"> <CountUp  end={counters.orders} /></span>
              <span>Lakh+</span>
            </p>
            <p className="overlap-content-text2">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React, { useEffect, useState } from "react";
// import girlImage from "../assets/images/girl-image.png";
// import lamp from "../assets/images/icons/lamp 1.png";
// import chat from "../assets/images/icons/chat 1.png";
// import celebration from "../assets/images/icons/celebrating 1.png";
// import instore from "../assets/images/icons/in-store-demonstration 1.png";
// import booking from "../assets/images/icons/booking 1.png";
// import OdometerCounter from "./OdometerCounter"; // 👈 Import the counter component

// export const Banner = () => {
//   const [counters, setCounters] = useState({
//     customers: 0,
//     vendors: 0,
//     orders: 0,
//   });

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setCounters({
//         customers: 125000,
//         vendors: 20000,
//         orders: 500000,
//       });
//     }, 1000); // Delay to trigger animation after mount

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="bannerContainer">
//       {/* ... your existing layout remains unchanged ... */}
//       <div className="overlap-container">
//         <div className="overlap-box1">
//           <div className="overlap-content1">
//             <img src={celebration} alt="" />
//             <p className="overlap-content-text1">
//               <OdometerCounter value={counters.customers} />
//               <span>K+</span>
//             </p>
//             <p className="overlap-content-text2">Customers</p>
//           </div>
//           <div className="overlap-content2">
//             <img src={instore} alt="" />
//             <p className="overlap-content-text1">
//               <OdometerCounter value={counters.vendors} />
//               <span>K+</span>
//             </p>
//             <p className="overlap-content-text2">Vendors</p>
//           </div>
//           <div className="overlap-content3">
//             <img src={booking} alt="" />
//             <p className="overlap-content-text1">
//               <OdometerCounter value={counters.orders} />
//               <span>Lakh+</span>
//             </p>
//             <p className="overlap-content-text2">Orders</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
