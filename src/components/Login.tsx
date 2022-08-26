import React from 'react'
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