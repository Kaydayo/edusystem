import React from "react";
import styles from "../../../../styles/Dashboard/Learning.module.css";
import tagImage from "../../../../Assets/Images/tags.png";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/index";

const CourseList = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.courseList_Container}>
      <p className={styles.CourseListTitle}>Check out Courses</p>
      <div className={styles.courseList}>
        {courses.map((item, i) => (
          <div className={styles.course_card} key={i}>
            <div className={styles.ImageCard}>
              <img src={tagImage} alt="tags" />
            </div>
            <div className={styles.course_content}>
              <h4>{item.title}</h4>
              <p>{item.tag}</p>

              <button onClick={() => navigate(item.path)}>See details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
