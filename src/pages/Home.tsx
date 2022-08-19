import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../layouts/Home/Carousel'
import FeaturedPrograms from '../layouts/Home/FeaturedPrograms'
import Hero from '../layouts/Home/Hero'
import Label from '../layouts/Home/Label'
import Review from '../layouts/Home/Review'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedPrograms />
      <Carousel />
      <Label />
      <Review/>
      </>
  )
}

export default Home