import React, { useEffect } from 'react'

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