import React from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Grid,
  Box,
} from '@mui/material';
import next from "@/assets/images/icons/nextarrow.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function CheckoutAccordian({ title, children,defaultExpanded = false }) { 
  return (
    <div>
      <Accordion
    disableGutters
    square
    elevation={0}
    defaultExpanded={defaultExpanded}
    className='checkoutaccordian'
    sx={{
      background: '#FFF',
      boxShadow: '0px 10px 20px 0px rgba(144, 144, 144, 0.15)',
      '&.Mui-expanded': {
        margin: 0,
      },
      '&:before': {
        display: 'none',
      },
    }}
  >
    <AccordionSummary
      expandIcon={<img src={next.src} alt='next' className='nextarrow'/>}
      
       sx={{
    backgroundColor: '#fff',
    boxShadow: '0px 10px 20px 0px rgba(144, 144, 144, 0.15)',
  padding:"8px 15px 8px 28px",
    '&.Mui-expanded': {
      backgroundColor: '#000',
      color: '#fff',
      '& .MuiSvgIcon-root': {
        color: '#fff',
      },
    },
    '& .MuiSvgIcon-root': {
      color: '#000', // default icon color when collapsed
    },
  }}
    >
      <Typography className='checkoutaccordiantitle'>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails  sx={{ p: 2, fontSize:"20px",fontWeight:'500',fontStyle:'normal'
         }}>{children}</AccordionDetails>
  </Accordion> 
    </div>
  )
}

export default CheckoutAccordian
