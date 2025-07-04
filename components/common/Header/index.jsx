"use client"
import React, {useState, useEffect} from 'react'
import locationmenu from "@/assets/images/icons/locationmenu.png";
import pin from "@/assets/images/icons/pin.png";
import loginicon from "@/assets/images/icons/loginicon.png";
import supporticon from "@/assets/images/icons/supporticon.png";
import languagemenu from "@/assets/images/icons/languagemenu.png";
import polygon from "@/assets/images/icons/Polygon.svg";
import { Navigation } from '@/components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLocationDot, faHeadset} from '@fortawesome/free-solid-svg-icons';


function Header({ showTopHeader }) {
  const [selectedOption, setSelectedOption] = useState("Delhi");
  const [selectLanguage, setSelectLanguage] = useState("English");

  useEffect(() => {
    library.add(faUser, faLocationDot, faHeadset);
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectLanguage(e.target.value);
  };

  return (
    <div className="fixed_header">
      {showTopHeader && (
        <div className="top_nav_wrapper">
          <div className="location">
            <FontAwesomeIcon
              icon="location-dot"
              style={{ color: '#F47721', marginRight: '10px', fontSize: '22px' }}
            />
            <select
              value={selectedOption}
              onChange={handleChange}
              className="custom-dropdown"
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>

          <div className="signupandsupport">
            <div className="loginsupportbox">
              <ul>
                <a href="">
                  <li>
                    <FontAwesomeIcon icon="user" style={{ color: '#F47721', marginRight: '10px', fontSize: '20px' }} />
                    Login / Signup
                  </li>
                </a>
                <a href="">
                  <li>
                    <FontAwesomeIcon icon="headset" style={{ color: '#F47721', marginRight: '10px', fontSize: '20px' }} />
                    Customer Support
                  </li>
                </a>
              </ul>
            </div>

            <div className="language-dropdown">
              <select
                value={selectLanguage}
                onChange={handleLanguageChange}
                className="custom-dropdown2"
              >
                <option value="Language">Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Bangla">Bangla</option>
              </select>
            </div>
          </div>
        </div>
      )}
      <Navigation />
    </div>
  );
}

export default Header;
