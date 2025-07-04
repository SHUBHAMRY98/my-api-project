import React from 'react'

import Faqs from '@/components/common/Faqs'
import Footer from '@/components/common/Footer'
import { SeoMeta } from '@/components/common/Meta'
import CheckoutAccordian from '@/components/CheckoutAccordian'
import vector1 from "../../assets/images/vector1.png"
import vector2 from "../../assets/images/vector2.png"
import vector3 from "../../assets/images/vector3.png"
import vector4 from "../../assets/images/vector4.png"
import google from "../../assets/images/google-icon.png"
import planning1 from "../../assets/images/planning1.png"
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
function Planning() {
  return (
    <>
       <SeoMeta
        title="Click N Event | planning"
        description=""
        keywords=""
        />

        <div className="planningcontainer">
            <Header showTopHeader={true} />
            <div className="planningbody">
            <div className="planning-main">
              <h1 className='planningHeading'>Start Planning</h1>
              <p>Click 'N' Event recommendations for your event below.</p>
               <div className="planningcontent-main">

                <div className="planningcontentleftcontentheading">Start Planning</div>

                <div className="planningcontent">
                <div className="planningcontentleftcontent">
                <p> Are you planning to host an event and looking for a one-stop-solution to get the perfect vendors in your budget on scheduled date with expert advice?</p>
                <p>Complete as much information as you can below and we'll provide you a list of curated vendors in your budget</p>
               </div>

                <div className="planningcontentrightcontent">
                    <img src={planning1.src} alt="cart" className='planning1'/>
                </div>
                 </div>

              <hr ></hr>
            
                <div className="planningcontent">

                <div className="planningcontentleftcontent">
                <p>What event you are planning to host? </p>

             <div className="option-button-wrapper">
            <div className="planning-bar">
              <select className="dropdown" style={{ width: "526px", height:"70px" }}>
                <option>Birthday Party</option>
                <option>Wedding</option>
                <option>Corporate</option>
              </select>
            </div>
          </div>
               
               </div>

                <div className="planningcontentrightcontent">
                    <p>What is your approximate event date?</p>

            <div className="option-button-wrapper">
            <div className="planning-bar">
              <select className="dropdown" style={{ width: "246px", height:"70px" }}>
                <option>Girl</option>
                <option>Boys</option>
                <option>Trans</option>
              </select>

              <select className="dropdown" style={{ width: "270px", height:"70px" }}>
                <option>10-15 years</option>
                <option>16-24 years</option>
                <option>24+ years</option>
              </select>
            </div>
          </div>
                </div>
                </div>


                 <div className="planningcontent">

                <div className="planningcontentleftcontent">
                <p>How many guests you are expecting? </p>

             <div className="option-button-wrapper">
            <div className="planning-bar">
              <select className="dropdown" style={{ width: "526px", height:"70px" }}>
                <option>Birthday Party</option>
                <option>Wedding</option>
                <option>Corporate</option>
              </select>
            </div>
          </div>
               
               </div>

                <div className="planningcontentrightcontent">
                    <p>What is your approximate event date?</p>

            <TextField
                    type='date'
                   sx={{
            
                backgroundColor: '#fff',
                border: '1px solid #DEDEDE',
                borderRadius:'8px',
                m: '5px 0px 15px 0px',
                width: '526px',
                height:'70px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
              }}
                  />
                </div>
                </div>
                <div className="planningcontentleftcontent">
                  <p>Would you like to share more about your event?</p>
                  </div>
                  <TextField
                    type='textarea'
                   sx={{
            
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius:'4px',
                m: '10px 0px 1px 0px',
                width: '1080px',
                height:'132px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
              }}
                  />

<div className='planning-button'>
                    <Button
                          sx={{
                              width:'160px',
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
                              background:"#143863",
                              textAlign:'center'
                            },
                          textTransform: "none"
                          }}
                        >
                          Submit
                        </Button>
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

export default Planning
