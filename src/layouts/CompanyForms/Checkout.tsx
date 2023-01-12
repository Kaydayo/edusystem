import React, { ReactEventHandler, useEffect, useState } from "react";
import Subscription from "./Subscription";
import Styles from "../../styles/CompanyOnboarding/Company.module.css";
import { subScriptionCourse } from "../../constants/data";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "../../components/Button";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { ISubCourse } from "./SubscriptionCourse";
// import { addAmountToSelect } from "../../redux/subscription";
import { calculateTotalSelect } from "../../utils/helper";
import { paySubscription } from "../../redux/actions/subscriptionAction";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserDetails } from "../../redux/actions/usersAction";
import { updateProfileInfo } from "../../redux/users";
import FormSelectBox from "../../components/form-select-box";

type CheckoutProp = {
  step: number;
  setStep: (val: number) => void;
};

const planOptions = [
  { value: "free", label: "Free", price: 0 },
  { value: "basic", label: "Basic", price: 1 },
  { value: "standard", label: "Standard", price: 2 },
  { value: "premium", label: "Premium", price: 3.5 },
];

const Checkout = ({ step, setStep }: CheckoutProp) => {
  const [selectedPlan, setSelectedPlan] = useState<any>(planOptions[0]);
  const [totalUser, setTotalUser] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [courseSelect, setCourseSelect] = useState<ISubCourse[]>([]);
  // const [subTotal, setSubTotal] = useState<number>(0);
  // const [totalCost, setTotalCost] = useState<number>(0);
  // const [tax, setTax] = useState<number>(9);
  // const { selections, subscriptions, error, success } = useAppSelector(
  //   (state: RootState) => state.subscription
  // );
  const { userToken, profileInfo } = useAppSelector(
    (state: RootState) => state.user
  );
  const { info } = useAppSelector((state: RootState) => state.companyonboard);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedPlan: currentPlan } = useAppSelector(
    (state: RootState) => state.subscription
  );

  React.useEffect(() => {
    const data = planOptions.filter(
      (plan, i) => plan.value === currentPlan.planName
    );
    // console.log(data, "data");
    setSelectedPlan(data[0]);
  }, []);

  console.log(info, "PROFILE INFO");
  const submitPaidCourse = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Cache-control": "no-cache",
        mode: "cors",
        Authorization: `Bearer ${userToken}`,
      },
    };

    const { data } = await axios.post(
      "/users/payCourse",
      {
        // courses: selections,
        companyId: info.id,
      },
      config
    );

    if (data.success) {
      localStorage.setItem("userDetails", JSON.stringify(data.payload));
      dispatch(updateProfileInfo(data.payload));
      navigate("/dashboard/company/profile/bio");
    } else {
      toast("Payment Failed");
    }
  };

  // useEffect(() => {
  //   setCourseSelect([...selections]);

  //   const additions = calculateTotalSelect(selections);

  //   setSubTotal(additions);
  //   setTotalCost(additions + tax);
  // }, [selections]);

  const handlePaySubscription = () => {
    // dispatch(paySubscription())
    submitPaidCourse();
  };

  const handlePlanSelection = (selected: any, meta: any) => {
    setSelectedPlan(selected);
    console.log("selected", selected);
    console.log("meta", meta);
  };

  console.log(selectedPlan);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target) {
      setTotalUser(Number(target.value));
      setTotalPrice(selectedPlan.price * Number(target.value));
    }
  };

  React.useEffect(() => {
    setTotalPrice(0);
    setTotalPrice(selectedPlan.price * totalUser);
  }, [selectedPlan]);

  return (
    <>
      <div className={Styles.checkout_container}>
        {/* <div className={Styles.tableHead}>
          <span>Plan</span>
          <span>Price per User</span>
          <span>No of User</span>
          <span>Total</span>
        </div> */}
        <table className={Styles.checkoutTable}>
          <thead className={Styles.thead}>
            <tr>
              <th>Plan</th>
              <th className={Styles.priceHead}>Price per User</th>
              <th>No of User</th>
              <th className={Styles.totalHead}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={Styles.selectBox}
                // style={{ paddingRight: "100px" }}
              >
                <FormSelectBox
                  name="plan"
                  value={selectedPlan}
                  options={planOptions}
                  placeholder="select plan"
                  onChange={handlePlanSelection}
                />
              </td>
              <td className={Styles.priceBody}>
                ${selectedPlan && selectedPlan.price}
              </td>
              <td>
                <input type="text" name="noOfUsers" onChange={handleChange} />
              </td>
              <td className={Styles.totalBody}>${totalPrice}</td>
            </tr>

            {/* mobile */}
            <tr className={Styles.mobileTableRow}>
              <td>
                <span>$2</span>
                <span>per user per month</span>
              </td>
              <td>$1000</td>
            </tr>
          </tbody>
        </table>

        {/* bottom part */}
        <div className={Styles.bottom_section}>
          <div className={Styles.sub} onClick={() => setStep(step - 1)}>
            <MdOutlineKeyboardArrowLeft fontSize={25} />
            <span>Subscription Plan</span>
          </div>

          <div className={Styles.calcContainer}>
            <div className={Styles.calcValues}>
              <div className={Styles.calcTitles}>
                <p>Subtotal:</p>
                <p>Tax:</p>
              </div>
              <div className={Styles.calcDigits}>
                <p>${totalPrice}</p>
                <p>$9</p>
              </div>
            </div>

            <div className={Styles.total}>
              <p>Total</p>
              <p>$1009</p>
            </div>

            <button className={Styles.totalBtn}>Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
