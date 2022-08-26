import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { useDispatch } from 'react-redux'
import { handleErrors } from '../redux/companyonboard'
import Checkout from '../layouts/CompanyForms/Checkout'
import { registerCompany } from '../redux/actions/companyAction'
import { ToastContainer, toast } from 'react-toastify';


const CompanyOnBoarding = () => {
  const [step, setStep] = useState<number>(0)
  const [findError, setFindError] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const checkError = useAppSelector((state: RootState) => state.companyonboard.errorfound)
  const getCompany = useAppSelector((state: RootState) => state.companyonboard.info)
  const getCompanyField = useAppSelector((state: RootState) => state.companyonboard.info.companyName)
  const {error} = useAppSelector((state:RootState)=> state.companyonboard)


  const nextBtn = () => {
    dispatch(handleErrors())
   toast(error)
    if(step === 1) {
      dispatch(registerCompany(getCompany))
    }
    if (step >= 1 && getCompanyField === '') {
      return
    } 

    
    
    if (step >= multiSteps.length - 1) {
      setStep(multiSteps.length - 1)
    } else {
      if (!checkError) {
        setStep(step + 1)
      }
    }


  }

  const prevBtn = () => {
    if (step <= 0) {
      setStep(0)
    } else {
      setStep(step - 1)
    }

  }
  const multiSteps = [<AdminForm />, <CompanyForm />, <Subscription />, <><Subscription /></>]


  return (
    <>
      <Nav pure={true} />
      <ToastContainer/>
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
          {
            step > 0 && <Button className={companyStyle.btnBack} onClick={prevBtn}>
              Back
            </Button>
          }
          {step > 1 && <Link to="/dashboard/bio"><Button className={companyStyle.btnSkip} >
            Skip
          </Button>
          </Link>}

          {
            step !== 3 && <Button type={step === 3 ? "submit" : ''} className={companyStyle.btnNext} onClick={nextBtn}>
              Next
            </Button>
          }
        </div>
        <div>
          {step === multiSteps.length - 1 && <Checkout />}
        </div>

      </div>
    </>
  )
}

export default CompanyOnBoarding