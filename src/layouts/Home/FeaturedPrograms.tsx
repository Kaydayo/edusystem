import React from "react";
import Tags from "../../components/Tags";
import fProgramStyles from "../../styles/Home/FeaturesPrograms.module.css";
// import lineSvg from "../../Assets/Images/line.svg";

const FeaturedPrograms = () => {
  return (
    <div className={fProgramStyles.content}>
      <div className={fProgramStyles.content_container}>
        <h2>Our Pillars</h2>
        <p>
          Through 4 Culture Pillars, OnCulture shapes employees to improve
          synergy and drive overall performance.
        </p>
        <div className={fProgramStyles.tags}>
          <Tags
            mainTxt="Harassment in the Workplace"
            subText="Sexual and Non-sexual"
          />
          <Tags mainTxt="Everyday Culture" subText="Coming soon" />
          <Tags mainTxt="Culture Clinic" subText="Coming soon" />
          <Tags mainTxt="Leadership Amp" subText="Coming soon" />
        </div>
      </div>
      {/* <div className={fProgramStyles.bgObjectline}>
        <img src={lineSvg} alt="onculture line" />
      </div>
      */}
      <div className={fProgramStyles.bgBlurObject}></div>
    </div>
  );
};

export default FeaturedPrograms;
