import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../layouts/Home/Carousel'
import FeaturedPrograms from '../layouts/Home/FeaturedPrograms'
import Hero from '../layouts/Home/Hero'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedPrograms />
      <Carousel/>
      </>
  )
}

export default Home