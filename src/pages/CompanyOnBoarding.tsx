import React, { useEffect, useState } from 'react'
import onCulture from "../Assets/Images/onculture-logo.svg"
import FieldType from '../components/FieldType'
import Stepper from '../components/Stepper'
import Nav from '../components/Nav'
import companyStyle from '../styles/CompanyOnboarding/Company.module.css'
import { Link, useNavigate } from 'react-router-dom'
import CompanyForm from '../layouts/CompanyForms/CompanyForm'
import AdminForm from '../layouts/CompanyForms/AdminForm'
import Subscription from '../layouts/CompanyForms/Subscription'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { useDispatch } from 'react-redux'
import { handleErrors, updateCompanyInfo } from '../redux/companyonboard'
import Checkout from '../layouts/CompanyForms/Checkout'
import { registerCompany } from '../redux/actions/companyAction'
import { ToastContainer, toast } from 'react-toastify';
import { getUserDetails } from '../redux/actions/usersAction'
import axios from 'axios'
import { postAllSubscriptions } from '../redux/subscription'


const CompanyOnBoarding = () => {
  const [step, setStep] = useState<number>(0)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const checkError = useAppSelector((state: RootState) => state.companyonboard.errorfound)
  const getCompany = useAppSelector((state: RootState) => state.companyonboard.info)
  const getCompanyField = useAppSelector((state: RootState) => state.companyonboard.info.companyName)
  const { errorfound, info } = useAppSelector((state: RootState) => state.companyonboard)
  const { selections } = useAppSelector((state: RootState) => state.subscription)
  const { error, userToken } = useAppSelector((state: RootState) => state.user)

  const getAllSubscriptions = async () => {
    const { data } = await axios.get('subscription/all')

    console.log(data, "all Data")

    dispatch(postAllSubscriptions(data))

  }
  // dispatch(handleErrors())


  useEffect(() => {
    dispatch(handleErrors)
    getAllSubscriptions()

  }, [])

  const skipBtn = async () => {
    dispatch(getUserDetails())

    const config = {
      headers: {
        'Cache-control': 'no-cache'
      },
    }
    const { data } = await axios.post('/users/find-me', {
      token: userToken
    }, config)

    if (data.success) {
      localStorage.setItem('userDetails', JSON.stringify(data.payload))
      navigate('/dashboard/bio')
    } else {
      toast(data.message)
    }



  }

  const nextBtn = async () => {
    dispatch(handleErrors())
    if (step > 1) {
      toast(error)
    }


    if (step === 1) {
      // console.log(getCompany, "GET COMAPNY")
      // toast("CLICKED NEXT")
      // dispatch(registerCompany(getCompany))

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`
        },
      }
      console.log(getCompany)
      const { data } = await axios.post(
        '/account/company',
        getCompany,
        config
      )
      console.log(data, "DATA")
      if (data.success) {
        dispatch(updateCompanyInfo(data.payload))
        localStorage.setItem('userDetails', JSON.stringify(data.payload))
        localStorage.setItem('userToken', data.payload.accessToken)
        toast(data.message)
      } else {
        toast(data.message)
        return
      }

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
  const multiSteps = [<AdminForm />, <CompanyForm />, <Subscription />, <Checkout step={step} setStep={setStep} />]


  return (
    <>
      <Nav pure={true} />
      <ToastContainer />
      <div className={companyStyle.main}>
        <div className={companyStyle.header}>
          <h4>Create Company Profile</h4>
          <p>Already have an account? <span><Link className={companyStyle.setLink} to='/login'>Login</Link></span></p>
        </div>
        <div className={companyStyle.mainStepper}>
          <Stepper step={step} setStep={setStep} />
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
          {step > 1 && <Button className={companyStyle.btnSkip} onClick={skipBtn}>
            Skip
          </Button>
          }

          {
            step !== 3 && <Button type={step === 3 ? "submit" : ''} className={companyStyle.btnNext} onClick={nextBtn}>
              Next
            </Button>
          }
        </div>
        {/* <div>
          {step === multiSteps.length - 1 && <Checkout />}
        </div> */}

      </div>
    </>
  )
}

export default CompanyOnBoarding