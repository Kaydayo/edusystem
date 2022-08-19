import React from 'react'
import Accordion from '../components/Accordion'
import Nav from '../components/Nav'
import Footer from '../layouts/Home/Footer'
import {faqData} from '../constants/data'
import SectionFaq from '../layouts/FAQ/SectionFaq'

const Faq = () => {
  return (
      <>
      <Nav />
      <SectionFaq/>
          <Footer/>
      </>
  )
}

export default Faq