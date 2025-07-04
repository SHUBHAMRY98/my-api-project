// // components/OdometerCounter.js

// import React, { useEffect, useRef } from "react";
// import Odometer from "react-odometerjs";
// // import "odometer/themes/odometer-theme-default.css";

// const OdometerCounter = ({ value }) => {
//   const odometerRef = useRef(null);

//   useEffect(() => {
//     const od = new Odometer({
//       el: odometerRef.current,
//       value: 0,
//       format: "(,ddd)",
//       theme: "default",
//       duration: 2000,
//     });

//     setTimeout(() => {
//       od.update(value);
//     }, 100); // short delay to ensure DOM is ready
//   }, [value]);

//   return <span className="odometer " ref={odometerRef}>0</span>;
// };

// export default OdometerCounter;
