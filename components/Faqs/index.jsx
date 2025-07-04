import React, {useState} from "react";
// import "./faqs.module.css";
// import styles from './faqs.module.css';
import { FaqArrowIcon } from "../icons";
import searchicon from "../../assets/images/icons/searchicon.png";
import expand from "../../assets/images/icons/expand.svg";
import collapse from "../../assets/images/icons/collapse.png"
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Faqs() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqList = [
    {
      id: "panel1",
      question:
        "How can Click 'N' Event help me making an informed decision about my event?",
      answer:
        "Click 'N' Event has a wide database of vendors dealing in different categories with their ratings, reviews, price range, and our own internal retina system to help you making a memorable event.",
    },
    {
      id: "panel2",
      question: "How can Click 'N' Event help me planning for my event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel3",
      question: "How can I make the payment for my booking?",
      answer:
        "You can  online via our secure payment gateway or via UPI, cards, and wallets.",
    
    },
    {
      id: "panel4",
      question: "How can I keep a track on my booking?",
      answer:
        "Your dashboard will help you track all your bookings, payments, and communication with vendors.",
    },
    {
      id: "panel5",
      question:
        "How can Click 'N' Event help me making an informed decision about my event?",
      answer:
        "Click 'N' Event has a wide database of vendors dealing in different categories with their ratings, reviews, price range, and our own internal retina system to help you making a memorable event.",
    },
    {
      id: "panel6",
      question: "How can Click 'N' Event help me planning for my event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      id: "panel7",
      question: "How can I make the payment for my booking?",
      answer:
        "You can  online via our secure payment gateway or via UPI, cards, and wallets.",
    
    },
  ];
  return (
    <section className="faq-section ">
      <div className="faq-left">
        <h4>Support</h4>
        <h2>FAQs</h2>
        <p>Have questions? We're here to help.</p>

        <div className="faq-search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">
            <Image src={searchicon} alt="search" />
          </span>
        </div>

        <div className="faq-help">
          <p className="faq-help-title">Still have questions?</p>
          <p className="faq-help-subtitle">
            Can't find the answer to your question? Chat with our friendly
            support team.
          </p>
          <a href="#" className="ask-now">
            Ask Now{" "}
            <span>
              <FaqArrowIcon />
            </span>
          </a>
        </div>
      </div>

      <div className="faq-right">
        {/* <div className="faq-item expanded">
          <div className="faq-question-wrapper">
            <div className="faq-question">
              How can Click 'N' Event help me making an informed decision about
              my event?
            </div>
            <div className="icon_faq">
              <div className="colapsicon">-</div>
            </div>
          </div>
          <div className="faq-answer">
            Click 'N' Event has a wide database of vendors dealing in different
            categories with their ratings, reviews, price range, and our own
            internal retina system to help you making an memorable event.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question-wrapper">
            <div className="faq-question">
              How can Click 'N' Event help me planning for my event?
            </div>
            <div className="icon_faq">
              <Image src={expand} alt="expand faq" />
            </div>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question-wrapper">
            <div className="faq-question">
              How can I make the payment for my booking?
            </div>
            <div className="icon_faq">
              <Image src={expand} alt="expand faq" />
            </div>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question-wrapper">
            <div className="faq-question">
              How can I keep a track on my booking?
            </div>
            <div className="icon_faq">
              <Image src={expand} alt="expand faq" />
            </div>
          </div>
        </div> */}
         <div className="faq_accordian_wrapper">

        
         {/* <Accordion>
        <AccordionSummary
          expandIcon={<Image src={expand} alt="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{
            color: "#000",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "125%"
          }}>How can Click 'N' Event help me making an
informed decision about my event?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily:"Roboto",
            fontSize:"18px",
            color:"#ffffff"
          }}>
            Click 'N' Event has a wide database of vendors
dealing in different categories with their
ratings, reviews, price range, and our own
internal retina system to help you making an memorable event.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<Image src={expand} alt="expand" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{
            color: "#000",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "125%"
          }}>How can Click 'N' Event help me planning for my event?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily:"Roboto",
            fontSize:"18px",
            color:"#ffffff"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Accordion>
        <AccordionSummary
          expandIcon={<Image src={expand} alt="expand" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{
            color: "#000",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "125%"
          }}>How can I make the payment for my booking?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily:"Roboto",
            fontSize:"18px",
            color:"#ffffff"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
         <Accordion>
        <AccordionSummary
          expandIcon={<Image src={expand} alt="expand" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{
            color: "#000",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "125%"
          }}>How can I keep a track on my booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily:"Roboto",
            fontSize:"18px",
            color:"#ffffff"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      {faqList.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              className={`faq-accordion ${
                expanded === item.id ? "active" : ""
              }`}
            >
              <AccordionSummary
                expandIcon={
                  <Image
                    src={expanded === item.id ? collapse : expand}
                    alt="toggle"
                    className="accordion-icon"
                  />
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
              >
                <Typography
                  component="span"
                  className={`faq-question2 ${
                    expanded === item.id ? "active" : ""
                  }`}
                >
                  {item.question}
                </Typography> 
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer-text">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
        <a href="#" className="ask-now view-all">
          View All{" "}
          <span>
            <FaqArrowIcon />
          </span>
        </a>

            {/* <a href="#" className="view-all">
            View All →
            </a> */}
      </div>
    </section>
  );
}

export default Faqs;
