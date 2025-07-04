import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/images/bak/logo.png";
import Image from "next/image";
export const Navigation = () => {
  // const [showDropdown, setShowDropdown] = useState(false);

   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <div className="navigation">
      <div className="logo">
        <img className="logo1" src={logo.src} alt="logo" />
      </div>
      <div className="navigation_vendor">
        <div className="nav_links">
          <ul className="nav-list">
            <li className="nav-dropdown">
              <a href="#" className="vendor-toggle" id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
                Vendors
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M7 12L0.0717975 -1.30507e-06L13.9282 -9.36995e-08L7 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* {showDropdown && (
                <ul className="nav-dropdown-menu">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )} */}

               <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
            </li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a> </li>
            <li><a href="#">Start Planning</a></li>
            <div className="vendor"><a href="#">Become A Vendor</a></div>
          </ul>
        </div>
      </div>
    </div>
  );
};
