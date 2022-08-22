import React from 'react'
import afyAcare from '../../Assets/Images/Afycare.png'
import lifeBank from '../../Assets/Images/life-bank.png'
import purple from '../../Assets/Images/purple.png'
import euphoriaLogo from '../../Assets/Images/euphoria-img.png'
import companyStyle from '../../styles/Home/Company.module.css'


const Companys = () => {
  return (
    <div className={companyStyle.main}>
      <h4>You're in good Company</h4>
      <div className={companyStyle.logos}>
        <img src={afyAcare} alt="onculture-afyacare" />
        <img src={lifeBank} alt="onculture-lifebank" />
        <img src={purple} alt="onculture-purple" />
        <img src={euphoriaLogo} alt="onculture-euphoria" />
      </div>

    </div>
  )
}

export default Companys