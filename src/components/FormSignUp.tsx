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
import { getUserDetails, googleLogin, registerUser, userLogin } from '../redux/actions/usersAction'
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
import { GoogleLogin } from 'react-google-login'
import { unwrapResult } from '@reduxjs/toolkit'
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'




export const enum FormName {
    SIGNUP = "Sign Up",
    LOGIN = "Log In"

}
type FormType = {
    text: FormName.SIGNUP | FormName.LOGIN
}
const FormSignUp = ({ text }: FormType) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)


    const { handleSuccess } = useGoogleAuthentication();
    const { loading, error, userInfo, success, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()


    const onSignUp = async (data: { email: string, password: string }) => {
        if (text === FormName.SIGNUP) {
            dispatch(registerUser(data))
            toast(error)
            dispatch(handleFormInput({ key: CompanyFormEnum.EMAIL, value: data.email }))
            await userSignUpFetch(data.email, data.password)
        } else {
           
            dispatch(userLogin(data))
            dispatch(getUserDetails())
            dispatch(handleFormInput({ key: CompanyFormEnum.EMAIL, value: data.email }))
            await userLoginFetch(data.email, data.password)
            toast(error)

        }
    }

   
    const userLoginFetch = async (email:string, password:string) => {
        const { data } = await axios.post(
            '/users/login',
            { username: email, password }
        )
        if (!data.success) {
            navigate('/')
        } else {
            const { payload } = data
            if (payload.user.isEmployee) {
                localStorage.setItem('userDetails', payload)
                localStorage.setItem('userToken', payload.accessToken)
                navigate('/employeeDashboard/courses')
            } else {
                localStorage.setItem('userDetails', payload)
                localStorage.setItem('userToken', payload.token)
                navigate('/dashboard/bio')
            }
            
        }
    }

    const userSignUpFetch = async (email: string, password: string) => {
        const { data} = await axios.post(`/users/sign-up`,{ email, password })
        
        console.log(data, "jsbgckgdgqwdugqwdah")
        
        // if (!data.success) {
        //     navigate('/')
        //     toast("Signup failed")
        // } else {
            localStorage.setItem('userToken', data.payload.accessToken)
            // localStorage.setItem('userDetails', data.payload)
            navigate('/company-onboarding')
        // }
        
    }


    // automatically authenticate user if token is found


    useEffect(() => {


        // if (success) {
        //     // alert("signed up successfully")

        //     if (profileInfo === null || !profileInfo.company || profileInfo.company.length === 0) {
        //         if (profileInfo.user.isEmployee) {
        //             navigate('/employeeDashboard/courses')
        //         } else {

        //             navigate('/dashboard/bio')
        //         }

        //     } else {
        //         if (profileInfo.user.isEmployee) {
        //             navigate('/employeeDashboard/courses')
        //         } else {
        //             navigate('/company-onboarding')
        //         }

        //     }


        // }

    }, [navigate, userInfo, userToken, success, error])


    const onFailure = (err: any) => {

    };
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
                <Button disabled={loading} onClick={() =>
                    onSignUp({ email: userInfo.email, password: userInfo.password })

                }>
                    {text}
                </Button>
                {/* </Link> */}
                <div>
                    <GoogleLogin clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                        onSuccess={(res) => {
                            dispatch(googleLogin(res))
                            dispatch(getUserDetails())
                        }}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={signUpStyle.gbtn}><img src={googleIcon} alt="google-onculture" /> {text} with Google</button>
                        )}
                        isSignedIn={false}
                        uxMode={'redirect'}
                        redirectUri={"https://onculture.io/company-onboarding"}
                    />
                </div>

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