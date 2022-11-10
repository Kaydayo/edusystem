import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Carousel from '../layouts/Home/Carousel'
import Companys from '../layouts/Home/Companys'
import FeaturedPrograms from '../layouts/Home/FeaturedPrograms'
import Footer from '../layouts/Home/Footer'
import Hero from '../layouts/Home/Hero'
import Label from '../layouts/Home/Label'
import Review from '../layouts/Home/Review'

const Home = () => {

  useEffect(() => {
    localStorage.clear()
  }, [])
  
  return (
    <div className='homepage'>
      <Nav />
      <Hero />
      <FeaturedPrograms />
      <Carousel />
      <Label />
      <Review />
      <Companys />
      <Footer/>
      </div>
  )
}

export default Home