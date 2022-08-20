import React from "react";
import Header from "../../components/Header";
import styles from "./style.module.css";
import vector from "../../assets/images/Vector.svg";
import purple from "../../assets/images/Purple.svg";
import unsplash from "../../assets/images/unsplash.svg";
import group from "../../assets/images/group.svg";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <div className={styles.flexContainer}>
          <div className={styles.textSection}>
            <h1>Interactive Learning Platform For Culture-Aligned Teams</h1>
            <p>
              OnCulture helps organizations educate employees on healthy
              workplace practices while uniting teams, even across different
              locations.
            </p>
            <button>Book a Demo</button>
          </div>
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}></div>
          </div>
        </div>
        <img src={vector} alt="" className={styles.vector} />
        <img src={purple} alt="" className={styles.purple} />
      </div>
      <div className={styles.featuredSection}>
        <h1 className={styles.featuredSectionHeader}>Featured Programs</h1>
        <p className={styles.featuredSectionparagraph}>
          Creating an inclusive and productive workplace culture requires
          deliberate work. OnCulture helps you shape the shared behaviors of
          your entire company while reinforcing positive values.
        </p>
        <div className={styles.sectionFlex}>
          <div className={`${styles.section} ${styles.first}`}>
            <img src={unsplash} alt="" />
            <h2>Harassment in the Workplace</h2>
            <p>Sexual and Non-sexual</p>
            <button>see details</button>
          </div>
          <div className={styles.section}>
            <img src={unsplash} alt="" />
            <h2>Culture Clinic</h2>
            <p>Coming Soon</p>
            <button>see details</button>
          </div>
        </div>
      </div>
      <div className={styles.culture}>
        <div className={styles.textHolderCulture}>
          <h2 className={styles.cultureHeader}>
            Align your employees with your workplace culture
          </h2>
          <p className={styles.cultureParagraph}>
            Here is where Onculture comes in. We help you shape the shared
            behaviors of your entire company, while promoting practices like;
          </p>
        </div>
        <div className={styles.cultureSection}>
          <div className={styles.firstCon}>
            <div className={styles.subSection}>
              <img src={group} alt="" />
              <h2>Team Connection and Collaboration</h2>
            </div>
            <div className={`${styles.subSection} ${styles.middle}`}>
              <img src={group} alt="" />
              <h2>Solid Culture Framework</h2>
            </div>
            <div className={styles.subSection}>
              <img src={group} alt="" />
              <h2>Diverse perspectives</h2>
            </div>
          </div>
          <div className={styles.secondCon}>
            <div className={styles.subSection}>
              <img src={group} alt="" />
              <h2>Onboarding</h2>
            </div>
            <div className={`${styles.subSection} ${styles.middle}`}>
              <img src={group} alt="" />
              <h2>Recognize Value Stars</h2>
            </div>
            <div className={styles.subSection}>
              <img src={group} alt="" />
              <h2>Workplace Harssment Awareness</h2>
            </div>
          </div>
          {/* <div className={styles.firstCon}></div> */}
        </div>
        <div className={styles.cultureAlignment}>
          <h1>So Your Culture Alignment is a click away</h1>
          <div className={styles.buttonHolder}>
            <button className={styles.cultureDemo}>Book a Demo</button>
            <button className={styles.culturePrice}>See our Pricing</button>
          </div>
        </div>
      </div>
    </>
  );
}
