import React from 'react'
import Header from '@/components/common/Header'
import Faqs from '@/components/common/Faqs'
import Footer from '@/components/common/Footer'
import { SeoMeta } from '@/components/common/Meta'
import CheckoutAccordian from '@/components/CheckoutAccordian'
import adobe from "../../assets/images/adobe.png"
import mastercard from "../../assets/images/mastercard.png"
import visa from "../../assets/images/visa.png"
import customer from "../../assets/images/customer.png"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Grid,
  Box,
    Divider,
     Button,
} from '@mui/material';

import cart from "../../assets/images/icons/grocery.png"
import { Height } from '@mui/icons-material'
function index() {
  return (
    <>
       <SeoMeta
        title="Click N Event | Checkout"
        description=""
        keywords=""
        />

        <div className="checkoutcontainer">
            <Header showTopHeader={true} />
            <div className="checkoutbody">
             
           

            <div className="checkout-main">
              <h1 className='checkoutHeading'>Checkout</h1>
               <div className="checkoutcontent">
              <div className="checkoutcontentleft">
        <CheckoutAccordian title="Your Personal Details">
        <Typography>Form content for personal details...</Typography>
      </CheckoutAccordian>

      <CheckoutAccordian title="Event Information & Schedule">
        <Typography>Event form content...</Typography>
      </CheckoutAccordian>

      <CheckoutAccordian title="Choose payment method">
        <Typography>Payment options go here...</Typography>
      </CheckoutAccordian>

      <CheckoutAccordian title="Payment Info" defaultExpanded>
        <Typography sx={{fontSize:'18px',fontWeight:'400', marginTop:'5px'}}>Cardholder Name</Typography>
        <TextField
          placeholder="Cardholder Name"
          fullWidth
          sx={{margin:'8px 0px'}}
          variant="outlined"
        />
        <Typography sx={{fontSize:'18px',fontWeight:'400', marginTop:'5px'}}>Card Number</Typography>
        <TextField
          placeholder="Card Number"
          fullWidth
         sx={{margin:'8px 0px'}}
          variant="outlined"
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography sx={{fontSize:'18px',fontWeight:'400', marginTop:'5px'}}>Expiration</Typography>
            <TextField sx={{margin:'8px 0px'}} placeholder="MM" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField sx={{margin:'40px 0px'}} placeholder="YYYY" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{fontSize:'18px',fontWeight:'400', marginTop:'5px'}}>CVC/CVV</Typography>
            <TextField sx={{margin:'8px 0px'}} placeholder="CVC/CVV" fullWidth variant="outlined" />
          </Grid>
        </Grid>
      </CheckoutAccordian>
            <div className="checkoutlogo">
                <div className="checkoutlogo1">
                  <img src={adobe.src} alt="adobe" className='adobe'/>
                </div>

                 <div className="checkoutlogo1">
                  <img src={mastercard.src} alt="mastercard" className='mastercard'/>
                </div>

                 <div className="checkoutlogo1">
                  <img src={visa.src} alt="visa" className='visa'/>
                </div>
               </div>
               <p className='paymenttext'>We accept all types of payments and <span>See how it is secure?</span></p>
              </div>
              <div className="checkoutcontentright">
                  <Box
      sx={{
        width: '100%',
        border: '1px solid #eee',
        borderRadius: '8px',
        // padding: '16px',
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
        alignItems:'center',
      }}
    >
      <Typography variant="h5" sx={
        {
          fontFamily:"Roboto",
          fontWeight:"500",
          padding: "22px 29px"
        }
      }>
        Order Summary
      </Typography>
      <Divider />
      {/* Cart Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={"30px 30px 0px 30px"}>
        <Box display="flex" alignItems="center" gap={1}>
           
            <img src={cart.src} alt="cart" className='cart'/>
          
          <Typography sx={{fontFamily:"Roboto", fontSize:'18px', fontWeight:"400"}}>6 Items in Cart</Typography>
        </Box>
        <Typography  sx={{ cursor: 'pointer',fontFamily:"Roboto", fontSize:'16px', fontWeight:"400", color:"#143863" }}>
          Details
        </Typography>
      </Box>
      {/* Summary Rows */}
      <Box display="flex" justifyContent="space-between" sx={{fontFamily:"Roboto", fontSize:'18px', fontWeight:"400"}} padding={"30px 30px 0px 30px"}>
        <Typography>Order Summary</Typography>
        <Typography>₹ 1,05,000</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" sx={{fontFamily:"Roboto", fontSize:'18px', fontWeight:"400"}} padding={"30px 30px 15px 30px"}>
        <Typography>Taxes</Typography>
        <Typography>₹ 18,900</Typography>
      </Box>
     <Divider />
      {/* Total */}
      <Box display="flex" justifyContent="space-between" sx={{fontFamily:"Roboto", fontSize:'18px'}} padding={"15px 30px"}>
        <Typography fontWeight={600}>Total Amount</Typography>
        <Typography fontWeight={600}>₹ 1,23,900</Typography>
      </Box>
      <Divider />
      {/* Booking Amount */}
      <Box display="flex" justifyContent="space-between" sx={{fontFamily:"Roboto", fontSize:'18px', color:"#F47721"}} padding={"15px 30px"}>
        <Typography fontWeight={500 } >
          Booking Amount (10%)
        </Typography>
        <Typography fontWeight={500}>
          ₹ 12,390
        </Typography>
      </Box>

      {/* Coupon Code Input */}
      <TextField
        placeholder="Enter your coupon code"
       sx={{
    backgroundColor: '#F5F5F7',
    m: '5px 30px 15px 30px',
    width: '85%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  }}
      />

      {/* Button */}
      <Button
        sx={{
          background:'#F47721',
          borderRadius:'6px',
          color:'#fff',
          fontFamily:"Roboto",
          fontWeight: 500,
          fontSize: '18px',
          margin:"15px 25px",
          padding:"15px 10px",
          '&:hover':{
            background:"#143863"
          },
        textTransform: "none"
        }}
      >
        Make Payment & Complete Booking
      </Button>
    </Box>
                 
              </div>
               </div>
              
               <div className="checkout_help_chat_wrapper">
                <p style={{color:"#000000", fontWeight:"400"}}>Need help?</p>
                <p style={{color:"#F47721", fontWeight:"500"}}>Chat with our expert</p>
                <img src={customer.src} alt="customer" className='customer'/>
               </div>
                </div>
            </div>
            <Faqs />
            <Footer />
        </div>
    </>
  )
}

export default index
