import React, { useEffect, useState } from 'react'
import Button from './Button'
import signUpStyle from '../styles/FAQ/FormSignup.module.css'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import SpecialButton from './SpecialButton'
import googleIcon from '../Assets/Images/google-auth.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { useDispatch } from 'react-redux'
import { getUserDetails, registerUser, userLogin } from '../redux/actions/usersAction'
import { useNavigate } from 'react-router-dom'
import { handleInputSignup } from '../redux/users'
import Signup from '../pages/Signup'
import { CompanyFormEnum, SingUp } from '../types/interfaces'
import { handleFormInput } from '../redux/companyonboard'
import PasswordStrengthBar from 'react-password-strength-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios'
import { gapi } from 'gapi-script'
import useGoogleAuthentication from '../hooks/useGoogleAuthentication'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'




export const enum FormName {
    SIGNUP = "Sign Up",
    LOGIN = "Log In"

}
type FormType = {
    text: FormName.SIGNUP | FormName.LOGIN
}
const FormSignUp = ({ text }: FormType) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [ggle, setGgle] = useState<any>('')
    
    const { handleSuccess } = useGoogleAuthentication();
    const { loading, error, userInfo, success, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

   
    const onSignUp = (data: { email: string, password: string }) => {
        if (text === FormName.SIGNUP) {
            dispatch(registerUser(data))
            toast(error)
            dispatch(handleFormInput({ key: CompanyFormEnum.EMAIL, value: data.email }))
        } else {
            dispatch(userLogin(data))
            dispatch(getUserDetails())
            dispatch(handleFormInput({ key: CompanyFormEnum.EMAIL, value: data.email }))
            toast(error)

        }
    }

   
   

    // automatically authenticate user if token is found
 
    
    useEffect(() => {
        // if (success) navigate('/login')
        if (success) {

            // alert("signed up successfully")
            if (text === FormName.SIGNUP) {
                toast(" sign up was successful")
                navigate('/company-onboarding')

            } else {

                if (profileInfo === null || profileInfo.company.length === 0) {
                    navigate('/company-onboarding')
                } else {
                    navigate('/dashboard')
                }

            }

        }

    }, [navigate, userInfo, userToken,success, error])

    return (
        <div className={signUpStyle.mainBox}>
            <ToastContainer />
            <h4>{text}</h4>
            {error && <p className={signUpStyle.setRed}>🔺 {error}</p>}
            <div className={signUpStyle.formInput}>
                <label htmlFor="email">Email Address<sup>*</sup></label>
                <input type="email" name="email" id="email" placeholder='Email Address' value={userInfo.email}
                    onChange={(e) => dispatch(handleInputSignup({ key: SingUp.EMAIL, value: e.target.value }))}
                    onInput={(e) => dispatch(handleInputSignup({ key: SingUp.EMAIL, value: e.currentTarget.value }))} />

            </div>
            <div className={signUpStyle.formInput}>
                <label htmlFor="password">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" id="password" value={userInfo.password}
                    onInput={(e) => dispatch(handleInputSignup({ key: SingUp.PASSWORD, value: e.currentTarget.value }))}
                    onChange={(e) => dispatch(handleInputSignup({ key: SingUp.PASSWORD, value: e.target.value }))} />
                <span>
                    {showPassword ? <FiEye className={signUpStyle.eyeForm} onClick={() => setShowPassword(!showPassword)} /> :
                        <FiEyeOff className={signUpStyle.eyeForm} onClick={() => setShowPassword(!showPassword)} />}
                </span>
                {/* {text === FormName.SIGNUP && <PasswordStrengthBar password={userInfo.password} />} */}
            </div>
            <div className={signUpStyle.formBtns}>
                {/* <Link to="/company-onboarding"> */}
                <Button disabled={loading} onClick={() => onSignUp({ email: userInfo.email, password: userInfo.password })}>
                    {text}
                </Button>
                {/* </Link> */}
                <GoogleLogin width='2800px' logo_alignment='center'
                    onSuccess={handleSuccess}
                />
               
                {text === FormName.SIGNUP && <p>
                    Already have an account?<span>
                        <Link className={signUpStyle.setLink} to='/login'>Login</Link>
                    </span>
                </p>
                }

            </div>
        </div>
    )
}

export default FormSignUp