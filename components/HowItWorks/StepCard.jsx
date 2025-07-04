import React, {useState} from 'react'
import Image from 'next/image';
function StepCard({item}) {
   const [isHovered, setIsHovered] = useState(false);

  // Determine base color based on the item number
  const isOriginalOrange = item.number % 2 !== 0;
   const bgColor = isHovered
    ? (isOriginalOrange ? '#002b5c' : '#f58220') // switch color on hover
    : (isOriginalOrange ? '#f58220' : '#002b5c');
  return (
      <div className={`step-card step-${item.number}`}
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={`step-number `}  style={{ backgroundColor: bgColor }}>{item.number}</div>
      <div className="white-circle"></div>
       <div className="icon_title_wrapper">
         <img src={item.icon.src} alt={item.title} className="step-icon" />
     <div className='card_title_wrapper'>
       <h4>{item.title}</h4>
      <p>{item.subtitle}</p>
       </div>
     </div>
    </div>

//     <div className={`step-card step-${item.number}`}>
//        <div className='whiteCircle'></div>
//        <div className='item-number'>{item.number}</div>
//        <img src={item.icon} alt={item.title} className='step-icon' />
//     </div>
  )
}

export default StepCard
