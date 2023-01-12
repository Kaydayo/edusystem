import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import { courseSummary } from "../../data/index";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../../styles/Dashboard/Learning.module.css";

const CourseDetail = () => {
  const location = useLocation();

  const course = courseSummary.filter(
    (summary) => summary.path === location.pathname
  );

  return (
    <>
      <DashboardHeader>
        <Link to="/dashboard/learning/">
          <span>Learning</span>
        </Link>
        <MdKeyboardArrowRight fontSize={20} />
        <span>{course[0].title}</span>
      </DashboardHeader>

      <div className={styles.preview_container}>
        <h2>{course[0].title}</h2>
        {course[0].intro.map((intro, i) => {
          return <p key={i}>{intro}</p>;
        })}

        {course[0].subs.map((sub, i) => {
          return (
            <>
              <div>
                <h5>{sub.title}</h5>
                {sub.items.map((item, i) => (
                  <div className={styles.listItem}>
                    <div>{/* <img src={Bullet} alt="bullet" /> */}</div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CourseDetail;
