import React, {useState} from 'react'
import Button from './Button'
import signUpStyle from '../styles/FAQ/FormSignup.module.css'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import SpecialButton from './SpecialButton'
import googleIcon from '../Assets/Images/google-auth.svg'
import { Link } from 'react-router-dom'

export const enum FormName {
    SIGNUP = "Sign Up",
    LOGIN = "Log In"
    
}
type FormType = {
    text: FormName.SIGNUP | FormName.LOGIN
}
const FormSignUp = ({ text }: FormType) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
      <div className={signUpStyle.mainBox}>
          <h4>{text}</h4>
          <div className={signUpStyle.formInput}>
              <label htmlFor="email">Email Address<sup>*</sup></label>
              <input type="email" name="email" id="email" placeholder='Email Address' />
          </div>
          <div className={signUpStyle.formInput}>
              <label htmlFor="password">Password</label>
              <input type={showPassword ? "text" : "password"} name="password" id="password"  />
              <span>
                  {showPassword ? <FiEye className={signUpStyle.eyeForm} onClick={() => setShowPassword(!showPassword)} /> :
                      <FiEyeOff className={signUpStyle.eyeForm} onClick={() => setShowPassword(!showPassword)} />}
              </span>
          </div>
          <div className={signUpStyle.formBtns}>
              <Link to="/company-onboarding">
                  <Button>
                      {text}
                  </Button>
              </Link>
              {
                  text === FormName.SIGNUP && <>
                      <SpecialButton className={signUpStyle.googlebtn}>
                          <>
                              <img src={googleIcon} alt="onculture-google" />
                              {text} with Google
                          </>
                      </SpecialButton>
                      <p>
                          Already have an account?<span>
                             <Link className={signUpStyle.setLink} to='/login'>Login</Link>
                          </span>
                      </p>
                  </>
              }
          </div>
   </div>
  )
}

export default FormSignUp