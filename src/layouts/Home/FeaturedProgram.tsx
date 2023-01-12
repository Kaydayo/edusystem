import React from "react";
import Button from "../../components/Button";
import Nav from "../../components/Nav";
import Video from "../../components/Video";
import styles from "../../styles/Home/FeaturedProgram.module.css";
import { ProgramSummary } from "../../constants/data";
import { useLocation } from "react-router-dom";
import Bullet from "../../Assets/Images/bullet.svg";

const FeaturedProgram = () => {
  const location = useLocation();

  const pageData = ProgramSummary.filter(
    (summary) => summary.path === location.pathname
  );

  return (
    <>
      <Nav />
      <div className={styles.main}>
        <div className={styles.content}>
          <h2>{pageData[0].title}</h2>
          {pageData[0].intro.map((intro, i) => {
            return <p key={i}>{intro}</p>;
          })}

          {pageData[0].subs.map((sub, i) => {
            return (
              <>
                <div>
                  <h5>{sub.title}</h5>
                  {sub.items.map((item, i) => (
                    <div className={styles.listItem}>
                      <div>
                        <img src={Bullet} alt="bullet" />
                      </div>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </>
            );
          })}

          <Button className={styles.contentBtn}>Enroll</Button>
        </div>
        <div className={styles.videoSection}>
          <h2>{pageData[0].title}</h2>
          <Video />
        </div>
      </div>
    </>
  );
};

export default FeaturedProgram;
