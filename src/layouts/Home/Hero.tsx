import React from "react";
import Button from "../../components/Button";
import Video from "../../components/Video";
import heroStyles from "../../styles/Home/Hero.module.css";
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={heroStyles.homeHero}>
      <div className={heroStyles.heroContent}>
        <div className={heroStyles.leftContent}>
          <h1>
            An interactive and learning platform that transforms employees into
            culture-aligned teams.
          </h1>
          <p>
            Educates and align employees to purposes and goals, while connecting
            teams.
          </p>

          <Button className={heroStyles.heroBtn}>Book a Demo</Button>
        </div>
        <div className={heroStyles.vid}>
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Hero;
