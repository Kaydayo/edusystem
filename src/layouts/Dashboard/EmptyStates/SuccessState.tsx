import React from 'react';
import boardStyle from '../../../styles/Dashboard/Dashboard.module.css'
import imag from '../../../Assets/Images/thumbs-up.svg';



const SuccessState = () => {
  return (
      <div className={boardStyle.successState}>
          <img src={imag} alt="onculture-success-state" />
          <h4>Awesome!</h4>
          <p>A team member from Onculture will reach out to you</p>
      </div>
  )
}

export default SuccessState