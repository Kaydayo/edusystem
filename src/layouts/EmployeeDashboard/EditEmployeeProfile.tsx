import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  useField,
} from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import EmployeeNav from "./EmployeeNav";
import styles from "../../styles/EmployeeDashboard/EditEmployeeProfile.module.css";
import editIcon from "../../Assets/Images/edit-icon.svg";
import avatar from "../../Assets/Images/avatar.svg";
import { updateProfileInfo } from "../../redux/users";
import PreviewImage from "../Dashboard/PreviewImage";
import axios from "axios";

interface Values {
  name: string;
  email: string;
  phoneNumber: string;
  jobRole: string;
  department: string;
  file: any;
}

const initailValues = {
  name: "",
  email: "",
  phoneNumber: "",
  jobRole: "",
  department: "",
  file: null,
};

const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];

const editProfileSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Not a valid email address").required(),
  phoneNumber: Yup.string().required(),
  jobRole: Yup.string().required(),
  department: Yup.string().required(),
  file: Yup.mixed()
    .nullable()
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format",
      (value) => !value || (value && supportedFormats.includes(value.type))
    ),
});

const EditEmployeeProfile = () => {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );

  const { user } = profileInfo;

  // console.log(user);
  // console.log(profileInfo);

  const employeeProfileUpdate = async (
    payload: Values | Omit<Values, "file">,
    token: string | null
  ) => {
    // console.log(payload);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Cache-control": "no-cache",
        mode: "cors",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "/employee/updateEmployee",
      payload,
      config
    );

    console.log(data, "data payload");
    toast(data.message);
  };

  return (
    <>
      <EmployeeNav />

      <ToastContainer />
      <div className={styles.main}>
        <div className={styles.form_card}>
          <Formik
            initialValues={{
              name: user.firstName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              jobRole: user.role,
              department: user.department,
              file: null,
            }}
            validationSchema={editProfileSchema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              const { file, ...others } = values;

              if (file) {
                employeeProfileUpdate(values, userToken);
              } else {
                employeeProfileUpdate(others, userToken);
              }

              setSubmitting(false);
            }}
          >
            {({ errors, touched, values, setFieldValue, handleChange }) => (
              <Form>
                <div className={styles.editPic}>
                  {profileInfo.user.profilePicture ? (
                    values.file ? (
                      <PreviewImage
                        file={values.file}
                        defaultImage={profileInfo.user.profilePicture}
                      />
                    ) : (
                      <img
                        src={
                          profileInfo.user.profilePicture
                            ? profileInfo.user.profilePicture
                            : avatar
                        }
                        alt="preview"
                        className={styles.rmPP}
                      />
                    )
                  ) : values.file ? (
                    <PreviewImage file={values.file} defaultImage={avatar} />
                  ) : (
                    <img
                      src={
                        profileInfo.user.profilePicture
                          ? profileInfo.user.profilePicture
                          : avatar
                      }
                      alt="preview"
                      className={styles.rmPP}
                    />
                  )}

                  <span>
                    <img
                      src={editIcon}
                      alt="onculture-edit-icon"
                      onClick={() => {
                        console.log("i clicked", fileRef.current);
                        if (fileRef.current) {
                          fileRef.current.click();
                        }
                      }}
                    />

                    <input
                      type="file"
                      name="file"
                      id="file"
                      ref={fileRef}
                      className={styles.customFileInput}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (event.currentTarget.files) {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }
                      }}
                    />
                  </span>

                  <div className={styles.errorMsg}>
                    <ErrorMessage name="file" />
                  </div>
                </div>
                <div>
                  <h4>Employee Details</h4>
                </div>
                <div className={styles.employeeDetailsContainer}>
                  <div className={styles.formBoxes}>
                    <label htmlFor="adminName">Employee Name*</label>
                    <Field
                      className={styles.inputField}
                      id="name"
                      name="name"
                      placeholder="Employee Name"
                    />
                    {errors.name && touched.name ? (
                      <span className={styles.errorMsg}>{errors.name}</span>
                    ) : null}
                  </div>

                  <div className={styles.formBoxes}>
                    <label htmlFor="email">Email Address*</label>
                    <Field
                      className={styles.inputField}
                      id="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    {errors.email && touched.email ? (
                      <span className={styles.errorMsg}>{errors.email}</span>
                    ) : null}
                  </div>

                  <div className={styles.formBoxes}>
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <Field
                      className={styles.inputField}
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <span className={styles.errorMsg}>
                        {errors.phoneNumber}
                      </span>
                    ) : null}
                  </div>

                  <div className={styles.formBoxes}>
                    <label htmlFor="jobRole">Job role*</label>
                    <Field
                      className={styles.inputField}
                      id="jobRole"
                      name="jobRole"
                      placeholder="job role"
                    />
                    {errors.jobRole && touched.jobRole ? (
                      <span className={styles.errorMsg}>{errors.jobRole}</span>
                    ) : null}
                  </div>

                  <div className={styles.formBoxes}>
                    <label htmlFor="department">Department*</label>
                    <Field
                      className={styles.inputField}
                      id="department"
                      name="department"
                      placeholder="department"
                    />
                    {errors.department && touched.department ? (
                      <span className={styles.errorMsg}>
                        {errors.department}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className={styles.btnContainer}>
                  <button className={styles.saveBtn} type="submit">
                    Save
                  </button>
                  <button
                    className={styles.cancel}
                    onClick={() => navigate("/employeeDashboard/courses")}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditEmployeeProfile;
