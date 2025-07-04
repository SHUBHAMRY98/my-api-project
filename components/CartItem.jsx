// components/CartItem.jsx
import React from 'react';
import deleteicon from "../assets/images/icons/delete.png"
const CartItem = ({
  heading,
  image,
  alt,
  title,
  description,
  extraContent,
  price,
  count,
  showCount = false,
}) => {
  return (
    <div className="cartsitems">
      <div className="singlecartitem">
        <div className="cartitemheading">{heading}</div>
      </div>
      <div className="cartitemdetails">
        <div className="cartimage_name">
          <div className="itemimage">
            <img src={image.src} alt={alt} />
          </div>
          <div className="venuedetails">
            <h3>{title}</h3>
            <p>{description}</p>
            {extraContent}
          </div>
        </div>
        <div className="cartrightside">
          <div className="carticon_count">
            <div className="deletecontainer">
              <img src={deleteicon.src} alt="deleteicon" />
            </div>
            {showCount && (
              <div className="cart_count">
               <p>-</p>
               <p>{count}</p>
               <p>+</p>
              </div>
            )}
          </div>
          <div className="cartitemprice">
            Price <span> ₹{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
