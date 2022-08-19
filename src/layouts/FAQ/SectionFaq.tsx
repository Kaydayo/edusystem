import React from 'react'
import Accordion from '../../components/Accordion'
import { faqData } from '../../constants/data'
import sectionStyle from '../../styles/FAQ/SectionFaq.module.css'

const SectionFaq = () => {
  return (
      <div className={sectionStyle.main}>
          <div className={sectionStyle.faqHead}>
              <h4>Frequently Asked Questions</h4>
       </div>
          <div className={sectionStyle.eachAccd}>
              {faqData.map((data,index) => (
                  <Accordion data={data} key={index}/>
              ))}
         </div>
      </div>
  )
}

export default SectionFaq