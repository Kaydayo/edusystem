import React from 'react'
import Tags from '../../components/Tags'
import fProgramStyles from '../../styles/FeaturesPrograms.module.css'
import lineSvg from '../../Assets/Images/line.svg'

const FeaturedPrograms = () => {
  return (
    <div className={fProgramStyles.content}>
      <h2>Featured Programs</h2>
      <p>Creating an inclusive and productive workplace culture
        requires deliberate work. OnCulture helps you shape the
        shared behaviors of your entire company while
        reinforcing positive values.</p>
      <div className={fProgramStyles.tags}>
        <Tags mainTxt='Sexual Harassment in the workplace' subText='Sexual and Non-sexual' />
        <Tags mainTxt='Culture Clinic' subText='Coming soon'/>
      </div>
      <div className={fProgramStyles.bgObjectline}>
        <img src={lineSvg} alt="onculture line" />
      </div>
      <div className={fProgramStyles.bgBlurObject}></div>
    </div>
  )
}

export default FeaturedPrograms