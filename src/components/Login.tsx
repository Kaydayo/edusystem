import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { getUserDetails } from '../redux/actions/usersAction'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import FormSignUp, { FormName } from './FormSignUp'
import Nav from './Nav'

const Login = () => {
    

    return (
        <>
            <ToastContainer/>
            <Nav />
            <FormSignUp text={FormName.LOGIN} />
        </>
  )
}

export default Login