import React from 'react'
import { boxData } from '../../constants/data'
import Box from '../../components/Box'
import carouselStyle from '../../styles/Home/Carousel.module.css'
import lineSvg from '../../Assets/Images/line2.svg'


const Carousel = () => {
  return (
    <div className={carouselStyle.content}>
      <h3>Align your employees with your workplace culture</h3>
      <p className={carouselStyle.pText}>Here is where Onculture comes in. We help you shape the
        shared behaviors of your entire company, while promoting
        practices like;</p>
      <div className={carouselStyle.gridContainer}>
        {boxData.map(data => (
          <Box data={data}/>
        ))}
      </div>
      <div className={carouselStyle.bgObjectline}>
        <img src={lineSvg} alt="onculture line" />
      </div>
      <div className={carouselStyle.bgBlurObject}></div>

   </div>
  )
}

export default Carousel