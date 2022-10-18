import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import DashboardNav from './DashboardNav'
import dashboardStyle from '../../styles/Dashboard/Dashboard.module.css'
import { Field, Form, Formik, FormikHelpers, useField } from 'formik'
import * as Yup from 'yup'
import sectionStyle from '../../styles/Contact/SectionContact.module.css'
import avatar from '../../Assets/Images/companyAvatar.svg'
import editIcon from '../../Assets/Images/edit-icon.svg'
import PreviewImage from './PreviewImage'
import Modal from '../../components/ Modal'
import InviteEmployee from './InviteEmployee'


interface Values {
    adminName: string,
    adminEmail: string,
    phoneNumber: string,
    companyName: string,
    employeeCount: string,
    mission: string,
    vision: string,
    values: string,
    file: any,
    
}

// const contactSchema = Yup.object().shape({
//     fullName: Yup.string().required('Full name is required').nullable(),
//     email: Yup.string().email('Not a valid email address').required('email is required').nullable(),
//     company: Yup.string().required("Company name is required").nullable(),
//     help: Yup.string().required('please tell us how to help you').nullable()
// })

const MyTextArea = ({ label, className, ...props }:any) => {
    const [field, meta] = useField(props);
    return (
        <div className={dashboardStyle.formBoxes}>
            <label htmlFor={props.id || props.name}>{label}*</label>
            <textarea className={className} {...field} {...props} />
            {/* {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null} */}
        </div>
    );
};

const EditAdminProfile = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { profileInfo, userToken } = useAppSelector((state: RootState) => state.user)
    const [preview, setPreview] = useState<string>(profileInfo.user.profilePicture)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const fileRef = useRef<HTMLInputElement>(null)
    const reader = new FileReader()

    
  return (
      <div className={dashboardStyle.editProfileMain}>
          <DashboardNav setShowModal={setShowModal} profileImage={preview} />

          <div className={dashboardStyle.editProfileBody}>
              <div className={dashboardStyle.editProfileForm}>
                  <Formik
                      initialValues={{
                          adminName: "",
                          adminEmail: "",
                          phoneNumber: "",
                          companyName: "",
                          employeeCount: "",
                          mission: "",
                          vision: "",
                          values: "",
                          file:null
                      }}
                    //   validationSchema={contactSchema}
                      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {

                          setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                          }, 500)
                      }}
                  >
                      {({ errors, touched, values, setFieldValue }) => (
                          <Form className={dashboardStyle.mainEditForm}>
                              <div className={dashboardStyle.editPicBoard}>
                                  {profileInfo.user.profilePicture ? 
                                      values.file ? 
                                     <PreviewImage file={values.file} defaultImage={profileInfo.user.profilePicture} /> 
                                          :
                                          <img src={avatar} alt="preview" className={dashboardStyle.rmPP} />
                                  :
                                      values.file ? <PreviewImage file={values.file} defaultImage={avatar} /> : 
                                          <img src={avatar} alt="preview" className={dashboardStyle.rmPP} />
                                    
                                  }
                                  <span>
                                      <img src={editIcon} alt="onculture-edit-icon" onClick={() => {
                                          console.log("i clicked", fileRef.current)
                                          if (fileRef.current) {
                                              fileRef.current.click()
                                          }
                                          
                                      }}/>
                                      <input
                                          type="file"
                                          name="file"
                                          id="file"
                                          ref={fileRef}
                                          className={dashboardStyle.customFileInput}
                                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                              if (event.currentTarget.files) {
                                                  setFieldValue("file", event.currentTarget.files[0])
                                              }
                                              
                                          }}
                                      />
                                  </span>
                                  
                              </div>

                              <div>
                                  <div>
                                      <h4>Admin Details</h4>
                                  </div>
                                 
                                  <div className={dashboardStyle.editAdminDetails}>
                                      <div className={dashboardStyle.formBoxes}>
                                          <label htmlFor="adminName">Admin Name*</label>
                                          <Field className={dashboardStyle.inputField} id="adminName" name="adminName" placeholder="Admin Name" />
                                          {/* {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null} */}
                                      </div>

                                      <div className={dashboardStyle.formBoxes}>
                                          <label htmlFor="adminEmail">Email Address*</label>
                                          <Field className={dashboardStyle.inputField} id="adminEmail" name="adminEmail" placeholder="Email Address" />
                                          {/* {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null} */}
                                      </div>

                                      <div className={dashboardStyle.formBoxes}>
                                          <label htmlFor="phoneNumber">Phone Number*</label>
                                          <Field className={dashboardStyle.inputField} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                                          {/* {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null} */}
                                      </div>
                                  </div>
                              </div>
                              

                              <div>
                                  <div>
                                      <h4>Company Details</h4>
                                  </div>

                                  <div className={dashboardStyle.editCompanyDetails}>
                                      <div className={dashboardStyle.formBoxes}>
                                          <label htmlFor="companyName">Company Name*</label>
                                          <Field className={dashboardStyle.inputField} id="companyName" name="acompanyName" placeholder="Company Name" />
                                          {/* {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null} */}
                                      </div>

                                      <div className={dashboardStyle.formBoxes}>
                                          <label htmlFor="employeeCount">Employee Count*</label>
                                          <Field className={dashboardStyle.inputField} id="employeeCount" name="employeeCount" placeholder="Employee Count" />
                                          {/* {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null} */}
                                      </div>

                                      <div className={dashboardStyle.wtttest}>
                                          <MyTextArea
                                              label="Mission"
                                              name="mission"
                                              id="mission"
                                              className={dashboardStyle.textAreaField}
                                              placeholder="Mission"
                                          />
                                      </div>

                                      <div className={dashboardStyle.wtttest}>
                                          <MyTextArea
                                              label="Vision"
                                              name="vision"
                                              id="vision"
                                              className={dashboardStyle.textAreaField}
                                              placeholder="vision"
                                          />
                                      </div>

                                      <div className={dashboardStyle.wtttest}>
                                          <MyTextArea
                                              label="Values"
                                              name="values"
                                              id="values"
                                              className={dashboardStyle.textAreaField}
                                              placeholder="values"
                                          />
                                      </div>
                                  </div>

                              </div>

                              <div className={dashboardStyle.editProfilebtns}>
                                  <button type='submit' className={dashboardStyle.inviteEmployee}>
                                  Submit
                                  </button>
                                  <button type='submit' className={dashboardStyle.createTeam}>
                                     Cancel
                                  </button>
                                  
                             </div>
                              

                          </Form>
                      )}

                  </Formik>
                  
              </div>
              <div>
                  <Modal show={showModal} setShowModal={setShowModal} children={<InviteEmployee />} />
              </div>
          
          </div>
    </div>
  )
}

export default EditAdminProfile