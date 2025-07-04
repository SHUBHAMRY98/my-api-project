import React from 'react'

import { SeoMeta } from '@/components/common/Meta'

import Faqs from '@/components/common/Faqs'
import Footer from '@/components/common/Footer'
import CheckoutAccordian from '@/components/CheckoutAccordian'
import vector1 from "../../assets/images/vector1.png"
import vector2 from "../../assets/images/vector2.png"
import vector3 from "../../assets/images/vector3.png"
import vector4 from "../../assets/images/vector4.png"
import google from "../../assets/images/google-icon.png"
import registration1 from "../../assets/images/registration1.jpg"
import Header from '@/components/common/Header'
import { shadows } from '@mui/system';
import {
 
  Typography,
  TextField,
  Grid,
  Box,
    Divider,
     Button,
} from '@mui/material';

import cart from "../../assets/images/icons/grocery.png"
import { Height } from '@mui/icons-material'
function Login2() {
  return (
    <>
       <SeoMeta
        title="Click N Event | Login"
        description=""
        keywords=""
        />

        <div className="registrationcontainer">
            <Header showTopHeader={true} />
            <div className="registrationbody">
             
           

            <div className="registration-main">
              <h1 className='registrationHeading'>Customer Login</h1>
               <div className="registrationcontent">
              <div className="registrationcontentleft">
      
               <div className="registrationcontentleftcontent">
                <div className="registrationcontentleftcontentheading">How It Work</div>
                <p> <span> <img src={vector1.src} alt="cart" className='vector'/> </span> Explore and compare vendors</p>
                <p> <span> <img src={vector2.src} alt="cart" className='vector'/> </span> Manage your interests and alerts</p>
                <p> <span> <img src={vector3.src} alt="cart" className='vector'/> </span> Get recommendations and key insights</p>
                <p> <span> <img src={vector4.src} alt="cart" className='vector'/> </span> Plan, and manage your events</p>
               </div>

               <img src={registration1.src} alt="cart" className='registration1'/>
    
              </div>
              <div className="registrationcontentright">
                  <Box
      sx={{
        width: '540px',
        // border: '1px solid #eee',
        // borderRadius: '8px',
        // padding: '16px',
        // backgroundColor: '#fff',
        fontFamily: 'Roboto',
        // alignItems:'center',
      }}
    >

      {/* Coupon Code Input */}
      <TextField
        placeholder="Email ID"
        type='email'
       sx={{
    backgroundColor: '#fff',
      boxShadow: '0px 2.5px 4px 0px rgba(174, 174, 174, 0.15)',
    m: '5px 0px 15px 0px',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  }}
      />


      {/* Coupon Code Input */}
      <TextField
        placeholder="Password"
        type='password'
       sx={{
    backgroundColor: '#fff',
      boxShadow: '0px 2.5px 4px 0px rgba(174, 174, 174, 0.15)',
    m: '5px 0px 15px 0px',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  }}
      />


     <div className='privacy'>
        <div className='checkbox'></div> <p className='term-condition'>By continuing, I agree to <a href="#">Teams & Conditions</a> and <a href="#">Privacy Policy</a></p>
     </div>




      {/* Button */}
      <Button
        sx={{
            width:'540px',
            height:'60px',
          background:'#F47721',
          borderRadius:'6px',
          color:'#fff',
          fontFamily:"Roboto",
          fontWeight: 500,
          fontSize: '18px',
          margin:"25px 0px",
          padding:"15px 10px",
          '&:hover':{
            background:"#143863"
          },
        textTransform: "none"
        }}
      >
        Create Account
      </Button>

 <Box
      sx={{
        width: '540px',
        display:'flex',
        justifyContent:'space-between',
        fontFamily: 'Roboto',
        // alignItems:'center',
      }}
    >
      <p className='new-account'><a href="#"><span>Having trouble logging in?</span> Get Help</a></p>
      <p className='new-account'><a href="#">Forgot Password?</a></p>
      </Box>


    </Box>
                 
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

export default Login2
