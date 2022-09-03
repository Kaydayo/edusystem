import React from 'react'
import sectionStyle from '../../styles/Contact/SectionContact.module.css'
import { socialContacts } from '../../constants/data'
import ContactForm from './ContactForm'

const SectionContact = () => {
  return (
    <div className={sectionStyle.scMain}>

      <h1>Say Hello!</h1>

      <div className={sectionStyle.socialContacts}>
        {socialContacts.map((items, index) => {
          return (
            <div key={index} className={sectionStyle.scContacts}>
              <img src={items.icon} alt="onculture-social-icons" />
              <div>
                <h4>{items.head}</h4>
                <p>{items.sub}</p>
              </div>
            </div>
          )
        })}
      </div>

      <h2>Or fill out this form we will quickly get back to you</h2>
      
      <div className={sectionStyle.cfForm}>
        <ContactForm />
      </div>

      <div className={sectionStyle.cfBlurObject}></div>
      
     

    </div>
  )
}

export default SectionContact