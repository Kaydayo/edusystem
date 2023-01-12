import React from "react";
import styles from "../../../../styles/Dashboard/Learning.module.css";
import tagImage from "../../../../Assets/Images/tags.png";
import EmptyState from "../../../../layouts/Dashboard/EmptyStates/EmptyState";
import emptStateBio from "../../../../Assets/Images/Course-emptyState.svg";

const ActiveCourses = () => {
  // const p = (23 / 60) * 100;
  return (
    <div className={styles.activeCourse_Container}>
      <p className={styles.title}>Active Course</p>

      <div>
        <div className={styles.course_card}>
          <div className={styles.ImageCard}>
            <img src={tagImage} alt="tags" />
          </div>
          <div className={styles.content}>
            <h4>Harassment in the Workplace</h4>
            {/* <p>23 of 60 slot used</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${p}%` }}></div>
            </div> */}
            <button>See details</button>
          </div>
        </div>
      </div>

      {/* <div className={styles.empty}>
        <EmptyState
          imag={emptStateBio}
          text="Looks like you have not picked a course yet. <br /> Click here to get it completed."
        />
      </div> */}
    </div>
  );
};

export default ActiveCourses;
