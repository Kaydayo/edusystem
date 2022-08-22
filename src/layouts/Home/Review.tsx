import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { reviewData } from '../../constants/data'
import quote from "../../Assets/Images/quote.png"
import { url } from 'inspector'


const Review = () => {
  return (
    <div>
      <ImageSlider images={reviewData}/>
   </div>
  )
}

export default Review