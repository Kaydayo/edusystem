import React, { useEffect, useState } from "react";
import onCulture from "../Assets/Images/oncultureLogo.svg";
import FieldType from "../components/FieldType";
import Stepper from "../components/Stepper";
import Nav from "../components/Nav";
import companyStyle from "../styles/CompanyOnboarding/Company.module.css";
import { Link, useNavigate } from "react-router-dom";
import CompanyForm from "../layouts/CompanyForms/CompanyForm";
import AdminForm from "../layouts/CompanyForms/AdminForm";
import Subscription from "../layouts/CompanyForms/Subscription";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { handleErrors, updateCompanyInfo } from "../redux/companyonboard";
import Checkout from "../layouts/CompanyForms/Checkout";
import { registerCompany } from "../redux/actions/companyAction";
import { ToastContainer, toast } from "react-toastify";
import { getUserDetails } from "../redux/actions/usersAction";
import axios from "axios";
import { postAllPlans } from "../redux/subscription";

const CompanyOnBoarding = () => {
  const [step, setStep] = useState<number>(0);
  const [validateErrors, setValidateErrors] = useState<boolean>(false)

  const [plans, setPlans] = useState([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state: RootState) => state.companyonboard.errors)
  const getErrors = (obj: any) => {
    let newObj = {...obj}
    if (step === 0) {
      delete newObj.companyName
    }
    
    return !Object.values(newObj).every(x =>  x === '');
  }
  const checkError = useAppSelector(
    (state: RootState) => state.companyonboard.errorfound
  );
  const getCompany = useAppSelector(
    (state: RootState) => state.companyonboard.info
  );
  const getCompanyField = useAppSelector(
    (state: RootState) => state.companyonboard.info.companyName
  );
  const { errorfound, info } = useAppSelector(
    (state: RootState) => state.companyonboard
  );
  // const { selections } = useAppSelector(
  //   (state: RootState) => state.subscription
  // );
  const { error, userToken } = useAppSelector((state: RootState) => state.user);

  // const getAllSubscriptions = async () => {
  //   const { data } = await axios.get("subscription/all");

  //   console.log(data, "all Data");

  //   dispatch(postAllSubscriptions(data));
  // };
  // dispatch(handleErrors())

  const fetchPricingData = async () => {
    const { data } = await axios.get("subscription/allPlans");

    console.log(data, "all Data");
    setPlans(data);
    dispatch(postAllPlans(data));
  };

  useEffect(() => {
    dispatch(handleErrors);
    // getAllSubscriptions();
    fetchPricingData();
  }, []);
  console.log(validateErrors,errors, getErrors(errors),"VVDF")
  useEffect(() => {
    dispatch(handleErrors);
    // getAllSubscriptions();
    setValidateErrors(getErrors(errors))
  }, [errors]);

  console.log("PLANS", plans);

  // const skipBtn = async () => {
  //   dispatch(getUserDetails());

  //   const config = {
  //     headers: {
  //       "Cache-control": "no-cache",
  //     },
  //   };
  //   const { data } = await axios.post(
  //     "/users/find-me",
  //     {
  //       token: userToken,
  //     },
  //     config
  //   );

  //   if (data.success) {
  //     localStorage.setItem("userDetails", JSON.stringify(data.payload));
  //     navigate("/dashboard/company/profile/bio");
  //   } else {
  //     toast(data.message);
  //   }
  // };

  const nextBtn = async () => {
    dispatch(handleErrors());
    setValidateErrors(getErrors(errors))
    if (step > 1) {
     
      if (validateErrors) {
        Object.keys(errors).map(err => {
          if (errors[err] !== '') {
            toast(errors[err])
          }
        })
      }
    }

    if (step === 1) {
      if (!validateErrors) {
        const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      console.log(getCompany);
      const { data } = await axios.post("/account/company", getCompany, config);
      console.log(data, "DATA");
      if (data.success) {
        dispatch(updateCompanyInfo(data.payload));
        localStorage.setItem("userDetails", JSON.stringify(data.payload));
        localStorage.setItem("userToken", data.payload.accessToken);
        toast(data.message);
      } else {
        toast(data.message);
        return;
      }
      } else {
        Object.keys(errors).map(err => {
          if (errors[err] !== '') {
            toast(errors[err])
          }
        })
      }
    }
    if (step >= 1 && getCompanyField === "") {
      return;
    }

    if (step >= multiSteps.length - 1) {
      setStep(multiSteps.length - 1);
    } else {
      if (!checkError) {
        setStep(step + 1);
      }
    }
  };

  const multiSteps = [
    <AdminForm />,
    <CompanyForm />,
    <Subscription step={step} setStep={setStep} />,
    <Checkout step={step} setStep={setStep} />,
  ];

  return (
    <>
      <Nav pure={true} />
      <ToastContainer />
      <div className={companyStyle.main}>
        <div className={companyStyle.header}>
          <h4>Create Company Profile</h4>
        </div>
        <div className={companyStyle.mainStepper}>
          <Stepper step={step} setStep={setStep} />
        </div>
        <div className={companyStyle.allForm}>{multiSteps[step]}</div>
        <div className={companyStyle.btnSteps}>
          {step <= 1 && (
            <Button
              type={step === 3 ? "submit" : ""}
              className={`${validateErrors ? companyStyle.disable : companyStyle.btnNext}`}
              onClick={nextBtn}
              disabled={validateErrors}
            >
              Next
            </Button>
          )}
        </div>
        {/* <div>
          {step === multiSteps.length - 1 && <Checkout />}
        </div> */}
      </div>
    </>
  );
};

export default CompanyOnBoarding;
