import React from 'react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import sectionStyle from '../../styles/Contact/SectionContact.module.css'

const contactSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required').nullable(),
    email: Yup.string().email('Not a valid email address').required('email is required').nullable(),
    company: Yup.string().required("Company name is required").nullable(),
    help: Yup.string().required('please tell us how to help you').nullable()
})
interface Values {
    fullName: string,
    email: string,
    company: string,
    help: string
}
const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                company: "",
                help: ""
            }}
            validationSchema={contactSchema}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
               
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500)
            }}
        >
            {({ errors, touched }) => (
                <Form className={sectionStyle.mainScForm}>
                    <div className={sectionStyle.formBoxes}>
                        <label htmlFor="fullName">Fullname*</label>
                        <Field className={sectionStyle.inputField} id="fullName" name="fullName" placeholder="Fullname" />
                        {errors.fullName && touched.fullName ? <span>{errors.fullName}</span> : null}
                    </div>

                    <div className={sectionStyle.formBoxes}>
                        <label htmlFor="email">Email Address*</label>
                        <Field className={sectionStyle.inputField} id="email" name="email" placeholder="Email Address" />
                        {errors.email && touched.email ? <span>{errors.email}</span> : null}
                    </div>

                    <div className={sectionStyle.formBoxes}>
                        <label htmlFor="company">Company name*</label>
                        <Field className={sectionStyle.inputField} id="company" name="company" placeholder="Company Name" />
                        {errors.company && touched.company ? <span>{errors.company}</span> : null}
                    </div>

                    <div className={sectionStyle.formBoxes}>
                        <label htmlFor="help">How can our team help you? *</label>
                        <Field className={sectionStyle.inputField} id="help" name="help" placeholder="Please select" />
                        {errors.help && touched.help ? <span>{errors.help}</span> : null}
                    </div>

                    <button type='submit' className={sectionStyle.contactBtn}>
                        Submit
                    </button>

                </Form>
            )}

        </Formik>
    )
}

export default ContactForm