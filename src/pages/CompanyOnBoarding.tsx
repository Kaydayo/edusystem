import React, { useState } from 'react'
import onCulture from "../Assets/Images/onculture-logo.png"
import FieldType from '../components/FieldType'
import Stepper from '../components/Stepper'
import Nav from '../components/Nav'
import companyStyle from '../styles/CompanyOnboarding/Company.module.css'
import { Link } from 'react-router-dom'
import CompanyForm from '../layouts/CompanyForms/CompanyForm'
import AdminForm from '../layouts/CompanyForms/AdminForm'
import Subscription from '../layouts/CompanyForms/Subscription'
import Button from '../components/Button'

const CompanyOnBoarding = () => {
  const [step, setStep] = useState<number>(0)
  console.log(step)
  const nextBtn = () => {
    if (step >= multiSteps.length ) {
      setStep(multiSteps.length)
    } else {
      setStep(step + 1)
    }

  }

  const prevBtn = () => {
    if (step <= 0) {
      setStep(0)
    } else {
      setStep(step - 1)
    }

  }
  const multiSteps = [<AdminForm />, <CompanyForm />, <Subscription />]
  return (
    <>
      <Nav pure={true} />
      <div className={companyStyle.main}>
        <div className={companyStyle.header}>
          <h4>Create Company Profile</h4>
          <p>Already have an account? <span><Link className={companyStyle.setLink} to='/login'>Login</Link></span></p>
        </div>
        <div className={companyStyle.mainStepper}>
          <Stepper step={step} />
        </div>
        <div className={companyStyle.allForm}>
          {multiSteps[step]}
        </div>
        <div className={companyStyle.btnSteps}>
          <Button className={companyStyle.btnBack} onClick={prevBtn}>
            Back
          </Button>
         { step > 2 && <Button className={companyStyle.btnSkip} >
            Skip
          </Button>}
          <Button className={companyStyle.btnNext} onClick={nextBtn}>
            Next
          </Button>

        </div>

      </div>
    </>
  )
}

export default CompanyOnBoarding