import React from 'react'
import NavResource from './NavResource'
import resourceStyle from '../../styles/Resource/Resource.module.css'
const SectionResource = () => {
  return (
      <div className={resourceStyle.rsContainer}>
          <h1>Articles  & Books for HR professionals and people leaders</h1>
          <NavResource/>
    </div>
  )
}

export default SectionResource