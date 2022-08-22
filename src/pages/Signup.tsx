import React from 'react'
import FormSignUp, { FormName } from '../components/FormSignUp'
import Nav from '../components/Nav'

const Signup = () => {
  return (
      <>
          <Nav /> 
          <FormSignUp text={FormName.SIGNUP}/>
      </>
  )
}

export default Signup