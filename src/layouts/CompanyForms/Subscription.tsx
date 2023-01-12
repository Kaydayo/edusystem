import React, { useEffect, useState } from "react";
import companyStyle from "../../styles/CompanyOnboarding/Company.module.css";
import PricingStyles from "../../styles/Pricing/pricing.module.css";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { addSelectedPlan } from "../../redux/subscription";
import { ToastContainer } from "react-toastify";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { planState } from "../../types/interfaces";

type CheckoutProp = {
  step: number;
  setStep: (val: number) => void;
};

const Subscription = ({ step, setStep }: CheckoutProp) => {
  const [checkTwo, setCheckTwo] = useState<boolean>(false);
  const [sanityCourses, setSanityCourses] = useState<any>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { plans } = useAppSelector((state: RootState) => state.subscription);
  console.log(plans, "subscriptions");

  useEffect(() => {
    // setSanityCourses(subscriptions);
  }, [plans]);

  const handleBtnClick = (index: number, plan: planState) => {
    if (index === 0) {
      navigate("/dashboard/company/profile/bio");
    } else {
      setStep(step + 1);
      dispatch(addSelectedPlan(plan));
    }
  };

  return (
    <div className={companyStyle.subscriptions}>
      <ToastContainer />
      <div className={companyStyle.toggleSub}>
        <h4 className={!checkTwo ? companyStyle.hashCol : ""}>Yearly</h4>
        <input
          type="checkbox"
          id="switch"
          onClick={() => setCheckTwo(!checkTwo)}
        />
        <label htmlFor="switch">Toggle</label>
        <h4 className={checkTwo ? companyStyle.hashCol : ""}>Monthly</h4>
      </div>

      <div className={PricingStyles.pricing_content}>
        {plans.map((plan, i) => {
          return (
            <div key={i} className={PricingStyles.package}>
              {plan.recommend && (
                <div className={PricingStyles.recommended}>Recommended</div>
              )}
              <div className={PricingStyles.top}>
                <span className={PricingStyles.name}>{plan.planName}</span>
                <span className={PricingStyles.price}>{plan.price}</span>
                <p className={PricingStyles.pm}>per user per month</p>
                <p className={PricingStyles.intro}>
                  For teams looking for better data visualization and
                  customization
                </p>
              </div>

              <ul>
                {plan.benefits.map((item, i) => (
                  <li key={i} className={PricingStyles.item}>
                    <BiCheck />
                    <span>{item.addsonTitle}</span>
                  </li>
                ))}
              </ul>
              <div className={PricingStyles.bottom}>
                <button
                  className={PricingStyles.btn}
                  onClick={() => handleBtnClick(i, plan)}
                >
                  Continue
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscription;
