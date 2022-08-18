import React from 'react'
import Nav from '../components/Nav'
import FeaturedPrograms from '../layouts/Home/FeaturedPrograms'
import Hero from '../layouts/Home/Hero'

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedPrograms/>
      </>
  )
}

export default Home