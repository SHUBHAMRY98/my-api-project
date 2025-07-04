"use client"
import React, { useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation";
import Faqs from "../../components/common/Faqs/index";
import Footer from "../../components/common/Footer/index";
import FaqArrowIcon2 from "../../assets/images/icons/FaqArrowIcon2.svg";
import Image from "next/image";
import cityhall from "../../assets/images/icons/city-hall 1.png";
import arrow7 from "../../assets/images/icons/Arrow 7.svg";
import venue from "../../assets/images/venue.png";
import arrows1 from "../../assets/images/icons/arrows1.png";
import cart from "../../assets/images/icons/add-to-cart 1.png";
import locator2 from "../../assets/images/icons/locator 2 1.png";
import cityhall2 from "@/assets/images/icons/city-hall 2 1.png";
import cateringIcon from "@/assets/images/icons/food-cover 1.png";
import Kwalitycatering from "@/assets/images/kwalitycatering.png";
import yellowchilli from "@/assets/images/yellochilli.png";
import djedge from "@/assets/images/djedge.png";
import djandme from "@/assets/images/djandme.png";
import vinyl from "@/assets/images/icons/vinyl 1.png";
import caters2 from "@/assets/images/icons/food-cover 2 1.png";
import veg from "@/assets/images/icons/vegIcon.svg";
import nonVeg from "@/assets/images/icons/nonVegIcon.svg";
import { useRouter } from "next/router";
import { SeoMeta } from "@/components/common/Meta";
import Header from "@/components/common/Header";
import { fetchData } from "../api/api";
function ServiceId() {
  const [selectcategory, setSelectedOption] = useState("Category 1");
  const [selectbudget, setBudgetOption] = useState("1lakhs");

  const handleCategoryChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleBudgetChange = (e) => {
    setBudgetOption(e.target.value);
  };

   const router = useRouter();
  
    const handleNavigation = () => {
      router.push('/vendordetail');
    };

  return (
    <>
      <SeoMeta title="Click N Event | Services" description="" keywords="" />
      <div className="vendor_wrapper">
        <Header showTopHeader={true} />
        <div className="vendor_body">
          <div className="vendor_right_body">
            <div className="vendor_top_body">
              <button>Need help? Contact us now</button>
              <div className="vendor_dropdowns">
                <div className="categories_dropdown">
                  <select
                    value={selectcategory}
                    onChange={handleCategoryChange}
                    className="dropdown"
                     style={{width:"200px"}}
                  >
                    <option value="Category1">Category 1</option>
                    <option value="Category2">Category 2</option>
                    <option value="Category3">Category 3</option>
                    <option value="Category4">Category 4</option>
                  </select>
                </div>

                <div className="budget_dropdown">
                  <select
                    value={selectbudget}
                    onChange={handleBudgetChange}
                     className="dropdown"
                     style={{width:"180px"}}
                  >
                    <option value="1">100000</option>
                    <option value="2lakhs">200000 </option>
                    <option value="3lakhs">300000</option>
                    <option value="4lakhs">400000</option>
                  </select>
                </div>
              </div>
            </div>
            <h1 className="vendor_heading">Birthday</h1>

            <p className="vendor_para">
              A budget of{" "}
              <span className="vendor_span">₹10,000 - ₹1,25,000</span> for a{" "}
              <span>birthday party</span> with <span>50-60 guests</span> in{" "}
              <span>Delhi</span> is reasonable. Here&apos;s how you can plan it
              efficiently, covering venue, food, decorations, and entertainment.
            </p>
            <p className="vendor_para">
              You can make rs and services by{" "}
              <span>adding just ₹25, 000 to your budget</span>. Use the &quot;Budget&quot;
              dropdown above to increase your budget to see the revised plan.
            </p>

            <a href="#">Yes, I want to increase my budget</a>

            <a className="read_more" href="#">
              Read More
              <span>
                <img src={FaqArrowIcon2.src} alt="arrow" />
              </span>
            </a>
          </div>
          <div className="all_vendorlist_card" >
            <div className="vendors">
              <div className="vendorlist_venue">
                <div className="Vendorlist_options">
                  <img src={cityhall.src} alt="cityhall"></img>
                  <p className="vendorlist_heading">
                    Venue Options (₹20,000 - ₹40,000)
                  </p>
                </div>
                <a href="#">
                  View More
                  <span>
                    <img src={arrow7.src} alt="arrow" />
                  </span>
                </a>
              </div>
              <div className="vendor_cart">
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={venue.src}
                    alt="venue"
                  ></img>
                  <div className="handpicked">Handpicked</div>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">Rajwada Banquet Hall</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.4</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">30 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Karol Bagh, Delhi</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹50,000</span>
                  </p>
                </div>

                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={venue.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">The Grand Vikalp</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.5</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">11 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Nehru Place, Dehli</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹50,000</span>
                  </p>
                </div>
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={venue.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">The Grand Vikalp</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.5</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">11 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Nehru Place, Dehli</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹50,000</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="vendors">
              <div className="vendorlist_venue">
                <div className="Vendorlist_options">
                  <img src={cateringIcon.src} alt="cityhall"></img>
                  <p className="vendorlist_heading">
                    Catering Options (₹30,000 - ₹40,000)
                  </p>
                </div>
                <a href="#">
                  View More
                  <span>
                    <img src={arrow7.src} alt="arrow" />
                  </span>
                </a>
              </div>
              <div className="vendor_cart">
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={Kwalitycatering.src}
                    alt="venue"
                  ></img>

                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <div className="left_detail">
                      <p className="vendor_name">Kwality Catering</p>
                      <div className="vendor_address">
                        <img src={locator2.src} alt="location"></img>
                        <p>Karol Bagh, Delhi</p>
                      </div>
                      <div className="veg">
                        <img src={veg.src} alt="veg"></img>
                        <p>Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹700 <span>Per Plate</span>
                      </p>
                    </div>
                    <div className="right_detail">
                      <div className="rating_and_reviews">
                        <div className="rating">4.1</div>
                        <p className="vendor_type">Very Good ,</p>
                        <p className="reviews">30 reviews</p>
                      </div>

                      <div className="vendor_banquet">
                        <img src={caters2.src} alt=""></img>
                        <p>Caterers</p>
                      </div>

                      <div className="veg">
                        <img src={veg.src} alt="veg"></img>
                        <p>Non-Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹1000 <span>Per Plate</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={yellowchilli.src}
                    alt="venue"
                  ></img>
                  <div className="handpicked">Handpicked</div>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <div className="left_detail">
                      <p className="vendor_name">Yello Chilli</p>
                      <div className="vendor_address">
                        <img src={locator2.src} alt="location"></img>
                        <p>Karol Bagh, Delhi</p>
                      </div>
                      <div className="veg">
                        <img src={veg.src} alt="veg"></img>
                        <p>Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹700 <span>Per Plate</span>
                      </p>
                    </div>
                    <div className="right_detail">
                      <div className="rating_and_reviews">
                        <div className="rating">4.5</div>
                        <p className="vendor_type">Very Good ,</p>
                        <p className="reviews">11 reviews</p>
                      </div>

                      <div className="vendor_banquet">
                        <img src={caters2.src} alt=""></img>
                        <p>Caterers</p>
                      </div>

                      <div className="veg">
                        <img src={nonVeg.src} alt="nonveg"></img>
                        <p>Non-Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹950 <span>Per Plate</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={venue.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <div className="left_detail">
                      <p className="vendor_name">Yello Chilli</p>
                      <div className="vendor_address">
                        <img src={locator2.src} alt="location"></img>
                        <p>Karol Bagh, Delhi</p>
                      </div>
                      <div className="veg">
                        <img src={veg.src} alt="veg"></img>
                        <p>Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹700 <span>Per Plate</span>
                      </p>
                    </div>
                    <div className="right_detail">
                      <div className="rating_and_reviews">
                        <div className="rating">4.5</div>
                        <p className="vendor_type">Very Good ,</p>
                        <p className="reviews">11 reviews</p>
                      </div>

                      <div className="vendor_banquet">
                        <img src={caters2.src} alt=""></img>
                        <p>Caterers</p>
                      </div>

                      <div className="veg">
                        <img src={nonVeg.src} alt="nonveg"></img>
                        <p>Non-Veg</p>
                      </div>
                      <p className="caters_price">
                        ₹1000 <span>Per Plate</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vendors">
              <div className="vendorlist_venue">
                <div className="Vendorlist_options">
                  <img src={vinyl.src} alt="cityhall"></img>
                  <p className="vendorlist_heading">
                    Entertainment & Music (₹5,000 - ₹10,000)
                  </p>
                </div>
                <a href="#">
                  View More
                  <span>
                    <img src={arrow7.src} alt="arrow" />
                  </span>
                </a>
              </div>
              <div className="vendor_cart">
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={djedge.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">DJ Edge</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.4</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">30 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Karol Bagh, Delhi</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹5,000</span>
                  </p>
                </div>

                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={djandme.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">DJ and Me</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.4</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">11 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Nehru Place, Dehli</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹7,000</span>
                  </p>
                </div>
                <div className="venue_cart1" onClick={handleNavigation}>
                  <img
                    className="venue_image"
                    src={venue.src}
                    alt="venue"
                  ></img>
                  <div className="arrows1">
                    {" "}
                    <img src={arrows1.src} alt="arrows"></img>
                  </div>
                  <div className="cart1">
                    <img src={cart.src} alt="cart"></img>
                  </div>
                  <div className="vendor_name_and_reviews">
                    <p className="vendor_name">The Grand Vikalp</p>
                    <div className="rating_and_reviews">
                      <div className="rating">4.5</div>
                      <p className="vendor_type">Very Good ,</p>
                      <p className="reviews">11 reviews</p>
                    </div>
                  </div>
                  <div className="vendor_address_and_banquet">
                    <div className="vendor_address">
                      <img src={locator2.src} alt="location"></img>
                      <p>Nehru Place, Dehli</p>
                    </div>
                    <div className="vendor_banquet">
                      <img src={cityhall2.src} alt=""></img>
                      <p>Banquet Hall, Marriage Hall</p>
                    </div>
                  </div>
                  <p className="vendor_price">
                    Estimated cost <span>₹50,000</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button className="cart_btn">Compare List</button>
            </div>
          </div>
        </div>
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default ServiceId;
