import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import DashboardNav from './DashboardNav'
import dashboardStyle from '../../styles/Dashboard/Dashboard.module.css'
import { ErrorMessage, Field, Form, Formik, FormikHelpers, useField } from 'formik'
import * as Yup from 'yup'
import sectionStyle from '../../styles/Contact/SectionContact.module.css'
import avatar from '../../Assets/Images/companyAvatar.svg'
import editIcon from '../../Assets/Images/edit-icon.svg'
import PreviewImage from './PreviewImage'
import Modal from '../../components/ Modal'
import InviteEmployee from './InviteEmployee'
import { updateCompany } from '../../redux/actions/usersAction'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { updateProfileInfo } from '../../redux/users'



interface Values {
    adminName: string,
    adminEmail: string,
    phoneNumber: string,
    companyName: string,
    employeeCount: string,
    mission: string,
    vision: string,
    values: string[],
    file: any,

}

const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];

const editProfileSchema = Yup.object().shape({
    adminName: Yup.string().required(),
    adminEmail: Yup.string().email('Not a valid email address').required(),
    phoneNumber: Yup.string().required(),
    companyName: Yup.string().required(),
    employeeCount: Yup.string().required(),
    mission: Yup.string().required(),
    vision: Yup.string().required(),
    values: Yup.array().of(Yup.string()).required(),
    file: Yup.mixed()
        .nullable()
        .test("FILE_FORMAT", "Uploaded file has unsupported format", (value) => !value || (value && supportedFormats.includes(value.type)))

})

const MyTextArea = ({ label, className, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className={dashboardStyle.formBoxes}>
            <label htmlFor={props.id || props.name}>{label}*</label>
            <textarea className={className} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={dashboardStyle.errorMsg}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const CustomMultipleField = ({ label, className,setFieldValue,currentValue,setCurrentValue, ...props }: any) => {
    const [field, meta] = useField(props);
    
    return (
        <div className={dashboardStyle.formBoxes}>
            <label htmlFor={props.id || props.name}>{label}*</label>
            <div className={dashboardStyle.valuesContainer}>
                {
                    field.value.map((val: string, index: any) => {
                        return (<div className={dashboardStyle.wrapInput}>
                            <input className={className} value={val} {...props} onChange={(e) => {
                                const updateValue = field.value.map((item: string, idx: any) => {
                                    if (idx === index) {
                                        return e.target.value
                                    } else {
                                        return item
                                    }
                                })

                                if (e.target.value === "") {
                                    const newList = field.value.filter((currValue: string) => currValue !== val)
                                    setFieldValue("values", newList)
                                } else {
                                    setFieldValue("values", updateValue)
                                }

                            }} />
                            <button onClick={() => {
                                const newList = field.value.filter((currValue: string) => currValue !== val)
                                setFieldValue("values", newList)
                            }}>
                                remove
                            </button>
                        </div>
                        )
                    })
                }
                <div className={dashboardStyle.wrapInput}>
                    <input className={className} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
                    <button onClick={() => {
                        if (currentValue !== "") {
                            setFieldValue("values",[...field.value, currentValue])
                            setCurrentValue("")
                        } else {
                            toast("Values field Cannot be empty")
                        }

                    }}>
                        add
                    </button>
                </div>
            </div>

        </div>
    )
    
}

const EditAdminProfile = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showTeamModal, setShowTeamModal] = useState<boolean>(false)
    const { profileInfo, userToken } = useAppSelector((state: RootState) => state.user)
    const [preview, setPreview] = useState<string>(profileInfo.user.profilePicture)
    const [currValue, setCurrValue] = useState<string>("")
    

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const fileRef = useRef<HTMLInputElement>(null)
    const reader = new FileReader()

    const { company, user } = profileInfo
    const companyUpdate = async (payload: Values | Omit<Values, 'file'>, token: string | null) => {


        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Cache-control': 'no-cache',
                'mode': 'cors',
                Authorization: `Bearer ${token}`
            },
        }
        const { data } = await axios.post(
            '/updateCompany',
            payload,
            config
        )

        console.log(data.payload, "data payload")
        localStorage.setItem('userDetails', JSON.stringify(data.payload))
        localStorage.setItem('userToken', data.payload.accessToken)
        console.log(data,"what i got")
        toast(data.message)
        if (data.success) {
            dispatch(updateProfileInfo(data.payload))
        }
        
    }

    return (
        <div className={dashboardStyle.editProfileMain}>
            <DashboardNav setShowModal={setShowModal} profileImage={preview} setShowTeamModal={setShowTeamModal} />
            <ToastContainer/>
            <div className={dashboardStyle.editProfileBody}>
                <div className={dashboardStyle.editProfileForm}>
                    <Formik
                        initialValues={{
                            adminName: company[0].admin.firstName,
                            adminEmail: company[0].admin.email,
                            phoneNumber: company[0].admin.phoneNumber,
                            companyName: company[0].companyName,
                            employeeCount: company[0].employeeCount,
                            mission: company[0].mission,
                            vision: company[0].vision,
                            values: company[0].values,
                            file: null
                        }}
                        validationSchema={editProfileSchema}
                        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                            console.log(userToken, 'not found')
                            const { file, ...others } = values
                            if (file) {
                                companyUpdate(values, userToken)
                            } else {
                                companyUpdate(others, userToken)
                            }

                            setSubmitting(false)
                        }}
                    >
                        {({ errors, touched, values, setFieldValue, handleChange }) => (
                            <Form className={dashboardStyle.mainEditForm}>
                                <div className={dashboardStyle.editPicBoard}>
                                    {profileInfo.user.profilePicture ?
                                        values.file ?
                                            <PreviewImage file={values.file} defaultImage={profileInfo.user.profilePicture} />
                                            :
                                            <img src={profileInfo.user.profilePicture ? profileInfo.user.profilePicture:avatar} alt="preview" className={dashboardStyle.rmPP} />
                                        :
                                        values.file ? <PreviewImage file={values.file} defaultImage={avatar} /> :
                                            <img src={profileInfo.user.profilePicture ? profileInfo.user.profilePicture : avatar} alt="preview" className={dashboardStyle.rmPP} />

                                    }
                                    <span>
                                        <img src={editIcon} alt="onculture-edit-icon" onClick={() => {
                                            console.log("i clicked", fileRef.current)
                                            if (fileRef.current) {
                                                fileRef.current.click()
                                            }

                                        }} />

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

                                    <div className={dashboardStyle.errorMsg} >
                                        <ErrorMessage name='file' />
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <h4>Admin Details</h4>
                                    </div>

                                    <div className={dashboardStyle.editAdminDetails}>
                                        <div className={dashboardStyle.formBoxes}>
                                            <label htmlFor="adminName">Admin Name*</label>
                                            <Field className={dashboardStyle.inputField} id="adminName" name="adminName" placeholder="Admin Name" />
                                            {errors.adminName && touched.adminName ? <span className={dashboardStyle.errorMsg}>{errors.adminName}</span> : null}
                                        </div>

                                        <div className={dashboardStyle.formBoxes}>
                                            <label htmlFor="adminEmail">Email Address*</label>
                                            <Field className={dashboardStyle.inputField} id="adminEmail" name="adminEmail" placeholder="Email Address" />
                                            {errors.adminEmail && touched.adminEmail ? <span className={dashboardStyle.errorMsg}>{errors.adminEmail}</span> : null}
                                        </div>

                                        <div className={dashboardStyle.formBoxes}>
                                            <label htmlFor="phoneNumber">Phone Number*</label>
                                            <Field className={dashboardStyle.inputField} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                                            {errors.phoneNumber && touched.phoneNumber ? <span className={dashboardStyle.errorMsg}>{errors.phoneNumber}</span> : null}
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
                                            <Field className={dashboardStyle.inputField} id="companyName" name="companyName" placeholder="Company Name" />
                                            {errors.companyName && touched.companyName ? <span className={dashboardStyle.errorMsg}>{errors.companyName}</span> : null}
                                        </div>

                                        <div className={dashboardStyle.formBoxes}>
                                            <label htmlFor="employeeCount">Employee Count*</label>
                                            <Field className={dashboardStyle.inputField} id="employeeCount" name="employeeCount" placeholder="Employee Count" />
                                            {errors.employeeCount && touched.employeeCount ? <span className={dashboardStyle.errorMsg}>{errors.employeeCount}</span> : null}
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
                                            <CustomMultipleField
                                                label="Values"
                                                name="values"
                                                id="values"
                                                className={dashboardStyle.inputField}
                                                placeholder="values"
                                                valuesData={profileInfo.company[0].values}
                                                setFieldValue={setFieldValue}
                                                currentValue={currValue}
                                                setCurrentValue={setCurrValue}

                                            />

                                        </div>
                                    </div>

                                </div>

                                <div className={dashboardStyle.editProfilebtns}>
                                    <button type='submit' className={dashboardStyle.inviteEmployee}>
                                        Submit
                                    </button>
                                    <button className={dashboardStyle.createTeam} onClick={() => navigate("/dashboard/bio")}>
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