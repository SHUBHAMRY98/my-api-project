import React from "react";
// import "./styles.css"; // Ensure you have the styling
import Image from "next/image";
function SwapingCart({_id, name, thumbnail, selected, handleNavigation2 }) {
  return (
    <div className={`card ${selected ? "selected" : ""}`} onClick={()=>handleNavigation2(_id)} >
      <div className="preview_wrapper">
        <img src={thumbnail} alt="icon" />
      </div>
      <div className="title">{name}</div>
      <div className="card-rectangle"></div>
    </div>
  );
}

export default SwapingCart;
