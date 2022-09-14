import React from 'react'
import Nav from '../components/Nav'
import SectionContact from '../layouts/Contact/SectionContact'
import Footer from '../layouts/Home/Footer'
import sectionStyle from '../styles/Contact/SectionContact.module.css'

const Contact = () => {
  return (
      <>
          <Nav />
      <SectionContact />
        
          <Footer/>
      </>
  )
}

export default Contact