import React, {useState,useEffect} from 'react'
import { SeoMeta } from '@/components/common/Meta'
import Header from '@/components/common/Header'
import Faqs from '@/components/Common/Faqs'
import Footer from '@/components/Common/Footer'
import question from '@/assets/images/icons/question 2 1.png'
import birtdaycake from '../../assets/images/icons/birthday-cake.png'
import locator from '../../assets/images/icons/locator.png'
import calender from '../../assets/images/icons/calendar.png'
import people from "../../assets/images/icons/people.png"
import rupee from "../../assets/images/icons/rupee.png"
import cutlery from "../../assets/images/icons/cutlery.png"
import cart1 from "../../assets/images/cart1.png"
import cart2 from "../../assets/images/cart2.png"
import cart3 from "../../assets/images/cart3.png"
import cart4 from "../../assets/images/cart4.png"
import cart5 from "../../assets/images/cart5.png";
import deleteicon from "../../assets/images/icons/delete.png"
import veg from "../../assets/images/icons/vegIcon.svg"
import customer from "../../assets/images/icons/customer-service.png"
import CartItem from '@/components/CartItem'
function Cart() {
  const initialServices = [
 {
    id: 1,
    category: "Venue",
    name: "The Grand Dreams Luxury Venue",
    description: "No.of Guests",
    basePrice: 40000,
    quantity: 50,
    image: cart1.src, 
  },
  {
    id: 2,
    category: "Food",
    name: "Kwality Catering",
    description: "No.of Plates",
    basePrice: 40000,
    quantity: 50,
    image: cart2.src, 
  },
  {
    id: 3,
    category: "Decorations",
    name: "ABC Decorations",
    description: "Ballons, lighting and LED lights",
    basePrice: 10000,
    quantity: 1,
    image: cart3.src, 
  },
  {
    id: 4,
    category: "Entertainment & Music",
    name: "DJ & Me",
    description: "Full sound & Music System",
    basePrice: 8000,
    quantity: 1,
    image: cart4.src, 
  },
  {
    id: 5,
    category: "Photography",
    name: "Magic Studio",
    description: "Photos and Drone",
    basePrice: 7000,
    quantity: 1,
    image: cart5.src, 
  },
];


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

      if (service.category === "Venue") venueTotal += itemTotal;
      if (service.category === "Food") foodTotal += itemTotal;
      if (service.category === "Decorations") decorationsTotal += itemTotal;
      if (service.category === "Entertainment & Music") musicTotal += itemTotal;
      if (service.category === "Photography") photographyTotal += itemTotal;
    });

    const billTotal = currentSubtotalItems; 
    const taxes = billTotal * 0.18; 
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
  }, [services]); 

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
         <SeoMeta
            title="Click N Event | Cart"
            description=""
            keywords=""
          />
     <div className="cartcontainer">
         <Header showTopHeader={true} />
      <div className="cart_body">
          <div className="cart_heading_section">
            <h1>Your Event Plan - Cart / Preview</h1>
            <div className="cart_question_img">
                <img src={question.src} alt="question_image" />
            </div>  
              </div>
            <div className="cart_description">
                <div className="functionlocation">
                    <div className="birthdaycart">
                     <img src={birtdaycake.src} alt="birtdaycake" />Birthday Party
                    </div>
                    <div className="birthdaycart">
                      <img src={locator.src} alt="locator" />Delhi
                    </div>
                    <div className="birthdaycart">
                      <img src={calender.src} alt="calender" />18 March 2025
                    </div>
                 </div>
              <div className="line"></div>
                <div className='cartcapacitybudget'>
                 <div className='cartcapacity'>
                    <div className='peopleimagecontainer'>
                        <img src={people.src} alt="people" />
                    </div>
                    <p>No.of Guests</p>
                    <h4>50 - 60 People</h4>
                 </div>

                 <div className='cartcapacity'>
                    <div className='peopleimagecontainer'>
                        <img src={rupee.src} alt="rupee" />
                    </div>
                    <p>Budget</p>
                    <h4>1 Lakh - 1.25 Lakh</h4>
                 </div>

                 <div className='cartcapacity'>
                    <div className='peopleimagecontainer'>
                        <img src={cutlery.src} alt="cutlery" />
                    </div>
                    <p>Food Perference</p>
                    <h4>Vegetarian</h4>
                 </div>
                </div>
          </div>
        <div className="cartsitems_and_summary">
          <div className="cartitems_left">
              {services.map((service) => ( 
          <div className="cartsitems">
              <div className="singlecartitem" key={service.id}>
                <p className="cartitemheading">{service.category}</p>
        <div className="cartitemdetails">
       <div className="cartimage_name">
          <div className="itemimage">
            <img src={service.image} alt={service.alt} />
          </div>
         
                  
                  <div className="venuedetails">
                    <h3 >{service.name}</h3>
                    <p >{service.description}</p>
                    {
                      service.id===2 && <div className='veg'>
                        <img src={veg.src} alt="veg" /> Veg </div>
                    }
                  </div>
                
                   </div>
                  <div className="cartrightside"> 
                    <div className="carticon_count">
                    <div className="deletecontainer">
                                  <img src={deleteicon.src} alt="deleteicon" />
                                </div>
                    <div className="cart_count">
                      <button  onClick={() => handleQuantityChange(service.id, -1)} disabled={service.quantity <= 1}>-</button>
                      <span>{service.quantity}</span>
                      <button onClick={() => handleQuantityChange(service.id, 1)}>+</button>
                    </div>
                    </div>
                    

                     <div className="cartitemprice">
            Price <span> ₹{service.basePrice}</span>
          </div>
                  </div>
                
                </div>
              </div>
            </div>
            ))}
          </div>
         <div className="cartsummary">
               <div className="cartsummaryheading">
               <h1>Summary</h1>
               </div>
               <div className='cartsummaryitem'>
                <div className="summaryvenue">
                    <p >Venue</p>
                    <p >₹ {summary.venue}</p>
                </div>

                <div className="summaryvenue">
                    <p >Food</p>
                    <p >₹ {summary.food}</p>
                </div>

                <div className="summaryvenue">
                    <p >Decorations</p>
                    <p >₹ {summary.decorations}</p>
                </div>

                <div className="summaryvenue">
                    <p >Music</p>
                    <p >₹ {summary.music}</p>
                </div>

                <div className="summaryvenue">
                    <p >Photography</p>
                    <p >₹ {summary.photography}</p>
                </div>

                <a href="#">Click here for suggestions to make
your event better</a>
                  
                  <h2>Bill Details</h2>

                   <div className="summaryvenue">
                    <p >Total Amount</p>
                    <p >₹ {summary.billTotal}</p>
                </div>

                 <div className="summaryvenue">
                    <p >Taxes</p>
                    <p >₹ {summary.taxes}</p>
                </div>

                <div className="summarytotal">
                    <p className='grandtotal' >Grand Total</p>
                    <p className='grandtotal'>₹ {summary.grandTotal}</p>
                </div>
                  
                  <button className='cartsummarybtn1'>Go To Checkout</button>
                  <button className='cartsummarybtn2'>Download Proposal</button>
              
                  
                  <div className='cartsummarygeneral'>
                    <p className='carthelp'>Need Help?</p>
                <p className='customer'>Chat with our expert</p>

                <div className='customer-image'>
                    <img  src={customer.src} alt="customer" />
                </div>
                  </div>
                 </div>
            </div>
        </div>
      </div>
      <Faqs />
      <Footer />
     </div>
    </>
  )
}

export default Cart
