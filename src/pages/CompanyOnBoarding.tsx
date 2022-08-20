import React from 'react'
import onCulture from "../Assets/Images/onculture-logo.png"
import Stepper from '../components/Stepper'

const CompanyOnBoarding = () => {
  return (
      <div>
          <div>
              <img src={onCulture} alt="onculture-logo" />
          </div>
          <div>
              <h4>Create Company Profile</h4>
              <p>Already have an account? Login</p>
          </div>
          <div>
             <Stepper/>
          </div>
    </div>
  )
}

export default CompanyOnBoarding