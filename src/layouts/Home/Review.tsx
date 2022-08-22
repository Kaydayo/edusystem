import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { reviewData } from '../../constants/data'

const Review = () => {
  return (
    <div>
      <ImageSlider images={reviewData}/>
   </div>
  )
}

export default Review