import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../layouts/Home/Footer'
import SectionResource from '../layouts/Resources/SectionResource'

const Resources = () => {
  return (
      <>
          <Nav />
          <SectionResource />
          <Outlet/>
          <Footer/>
      </>
  )
}

export default Resources