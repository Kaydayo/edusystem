import React from "react";
import Button from "../../components/Button";
import Nav from "../../components/Nav";
import Video from "../../components/Video";
import styles from "../../styles/Home/FeaturedProgram.module.css";
import { ProgramSummary } from "../../constants/data";

const FeaturedProgram = () => {
  const pageData = ProgramSummary.filter(
    (summary) => summary.path === "harrassment-in-the-workplace"
  );
  console.log(pageData);

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
                    <p className={styles.listItem}>
                      <div className={styles.bullet}></div>
                      {/* <div className={styles.point}> */}
                      {item}
                      {/* </div> */}
                    </p>
                  ))}
                </div>
              </>
            );
          })}

          <Button className={styles.contentBtn}>Enroll</Button>
        </div>
        <div className={styles.videoSection}>
          <h2>Harassment in the Workplace.</h2>
          <Video />
        </div>
      </div>
    </>
  );
};

export default FeaturedProgram;
