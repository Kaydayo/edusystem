import React from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { BiCheck } from "react-icons/bi";
import styles from "../styles/Pricing/pricing.module.css";
import Footer from "../layouts/Home/Footer";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { postAllPlans } from "../redux/subscription";

const Pricing = () => {
  const [checkTwo, setCheckTwo] = React.useState<boolean>(false);

  const { plans } = useAppSelector((state: RootState) => state.subscription);
  const dispatch = useAppDispatch();

  const fetchPricingData = async () => {
    const { data } = await axios.get("subscription/allPlans");

    dispatch(postAllPlans(data));
  };

  React.useEffect(() => {
    fetchPricingData();
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.pricing_container}>
        <h2>Our plan are tailored for unique teams</h2>
        <div className={styles.toggleSub}>
          <h4 className={!checkTwo ? styles.hashCol : ""}>Yearly</h4>
          <input
            type="checkbox"
            id="switch"
            onClick={() => setCheckTwo(!checkTwo)}
          />
          <label htmlFor="switch">Toggle</label>
          <h4 className={checkTwo ? styles.hashCol : ""}>Monthly</h4>
        </div>
        <div className={styles.pricing_content}>
          {plans.map((plans, i) => {
            return (
              <div key={i} className={styles.package}>
                {plans.recommend && (
                  <div className={styles.recommended}>Recommended</div>
                )}
                <div className={styles.top}>
                  <span className={styles.name}>{plans.planName}</span>
                  <span className={styles.price}>{plans.price}</span>
                  <p className={styles.pm}>per user per month</p>
                  <p className={styles.intro}>
                    For teams looking for better data visualization and
                    customization
                  </p>
                </div>

                <ul>
                  {plans.benefits.map((item, i) => (
                    <li key={i} className={styles.item}>
                      <BiCheck />
                      <span>{item.addsonTitle}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.bottom}>
                  <button className={styles.btn}>Get Started</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
