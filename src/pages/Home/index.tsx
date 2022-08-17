import React from "react";
import Header from "../../components/Header";
import styles from "./style.module.css";
import vector from "../../assets/images/Vector.svg";
import purple from "../../assets/images/Purple.svg";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.flexContainer}>
        <div className={styles.textSection}>
          <h1>Interactive Learning Platform For Culture-Aligned Teams</h1>
          <p>
            OnCulture helps organizations educate employees on healthy workplace
            practices while uniting teams, even across different locations.
          </p>
          <button>Book a Demo</button>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.videoContainer}></div>
        </div>
      </div>
      <img src={vector} alt="" />
      <img src={purple} alt="" />
    </div>
  );
}
