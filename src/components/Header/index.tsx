import React from "react";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div>
      <div>
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
          <button>SignUp</button>
          <button>Book a Demo</button>
        </div>
      </div>
    </div>
  );
}
