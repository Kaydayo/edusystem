import React, { useEffect } from 'react'
import { getUserDetails } from '../redux/actions/usersAction'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import FormSignUp, { FormName } from './FormSignUp'
import Nav from './Nav'

const Login = () => {
    

    return (
        <>
            <Nav />
            <FormSignUp text={FormName.LOGIN} />
        </>
  )
}

export default Login