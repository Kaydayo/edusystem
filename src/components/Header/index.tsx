import React, { useState } from "react";
import logo from "../../assets/images/Onculture-logo.svg";
import styles from "./style.module.css";

export default function Header() {
  const [mobile, setMobile] = useState(false);

  const openMobile = () => {
    setMobile(true);
  };

  const closeMobile = () => {
    setMobile(false);
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.linksContainer}>
          <ul>
            <li>The people practice</li>
            <li>Resouces</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.signup}>SignUp</button>
          <button className={styles.demo}>Book a Demo</button>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.hamburger} onClick={openMobile}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      {mobile && (
        <div className={styles.mobileContent}>
          <div className={styles.mobileHeader}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="" />
            </div>
            <p onClick={closeMobile}>&#10006;</p>
          </div>

          <ul>
            <li>The people practice</li>
            <li>Resouces</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
          <div className={styles.buttonContainer}>
            <button className={styles.signup}>SignUp</button>
            <button className={styles.demo}>Book a Demo</button>
          </div>
        </div>
      )}
    </div>
  );
}
