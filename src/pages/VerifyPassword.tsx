import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import * as Yup from 'yup'
import { createPassword, getNameByVeify } from '../redux/actions/usersAction'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import sectionStyle from '../styles/Contact/SectionContact.module.css'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'


const setPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null],'Passwords must match').required('please confirm password')
})

interface PasswordValue {
    password: string;
    confirmPassword: string;
}

const VerifyPassword = () => {
    const [name, setName] = useState<string>("")
    const [company, setCompany] = useState<string>("")
    const [idToken, setIdToken] = useState<any>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
    const { loading, error, userInfo, success, userToken, profileInfo } = useAppSelector((state: RootState) => state.user)

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
   
    
    const getData = async (token:any) => {
        const { data } = await axios.post('/users/getMeVerify', {
            token: token
        })
        if (!data.success) {
            navigate('/')
        } else {
            const { payload } = data
            setName(payload.user.firstName)
            setCompany(payload.company[0].companyName)
        }
        
    } 
    useEffect(() => {

        
        getData(params.token)
        setIdToken(params.token)
        dispatch(getNameByVeify(params.token))
    }, [])

    if (loading) {
        return <p>Loading</p>
    }
  return (
      <>
          <Nav />
          <div className={sectionStyle.userVerify}>
              <h3>Hello {name}!</h3>
              <div className={sectionStyle.welcome}>
                  <p>Welcome to the onculture for {company}</p>
                  <p>Please create a password to continue your training</p>
            </div>
          </div>
          <ToastContainer/>
          <div>
              <Formik
                  initialValues={{
                      password: "",
                      confirmPassword:""
                  }}
                  validationSchema={setPasswordSchema}
                  onSubmit={(values: PasswordValue, { setSubmitting }: FormikHelpers<PasswordValue>) => {
                      console.log(idToken,"idtoken here")
                      dispatch(createPassword({ token: idToken, password: values.password }))
                      setTimeout(() => {
                          toast("Password Update successfull");
                          navigate('/employeeDashboard/courses')
                          setSubmitting(false);
                      }, 500)
                   
                  }}
              >
                  {({ errors, touched }) => (
                      <Form className={sectionStyle.mainScForm}>
                          <div className={sectionStyle.formBoxes}>
                              <label htmlFor="password">Password*</label>
                              <Field type={showPassword? 'text': 'password'} className={sectionStyle.inputField} id="password" name="password" placeholder="New Password" />
                              <div>
                                  {showPassword ? <FiEye className={sectionStyle.eyeShow} onClick={() => setShowPassword(!showPassword)} /> :
                                      <FiEyeOff className={sectionStyle.eyeShow} onClick={() => setShowPassword(!showPassword)} />}
                              </div>
                              {errors.password && touched.password ? <span>{errors.password}</span> : null}
                          </div>

                          <div className={sectionStyle.formBoxes}>
                              <label htmlFor="confirmPassword">Confirm Password*</label>
                              <Field type={showConfirmPassword ? 'text' : 'password'} className={sectionStyle.inputField} id="confirmPassword" name="confirmPassword" placeholder="Password" />
                              <div>
                                  {showConfirmPassword ? <FiEye className={sectionStyle.eyeShow} onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> :
                                      <FiEyeOff className={sectionStyle.eyeShow} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
                              </div>
                              {errors.confirmPassword && touched.confirmPassword ? <span>{errors.confirmPassword}</span> : null}
                          </div>

                          <button type='submit' className={sectionStyle.contactBtn}>
                              Update Password
                          </button>


                      </Form>
                  )}
                  


            </Formik>

          </div>
         
      </>
  )
}

export default VerifyPassword