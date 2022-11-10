import React from "react";
import Button from "../../components/Button";
import RoundProgress from "../../components/RoundProgress";
import { getColorGrade } from "../../utils/helper";
import employeeStyle from "../../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/store";
import { setActiveCourse } from "../../redux/courses";

type EmployeeCourseCardProp = {
  index: number;
  id: string;
  courseTitle: string;
  value: number;
  duration: string;
  timeLeft: string;
  classes: number | string;
  description: string;
};
const EmployeeCourseCard = ({
  index,
  id,
  courseTitle,
  value,
  duration,
  timeLeft,
  classes,
  description,
}: EmployeeCourseCardProp) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={employeeStyle.employeeCourse}>
      <div className={employeeStyle.courseCard}>
        <p>{courseTitle}</p>
      </div>

      <div className={employeeStyle.progressCourse}>
        <RoundProgress
          value={value}
          hexColor={getColorGrade(value)}
          widthHeight={"128"}
        />
        <p>{description}</p>
      </div>

      <div className={employeeStyle.trackProgress}>
        <div className={employeeStyle.perTrack}>
          <p>Duration</p>
          <p>{duration}</p>
        </div>

        <div className={employeeStyle.perTrack}>
          <p>Time left</p>
          <p>{timeLeft}</p>
        </div>

        <div className={employeeStyle.perTrack}>
          <p>Classes</p>
          <p>{classes}</p>
        </div>
      </div>

      <Button
        className={employeeStyle.contBtn}
        onClick={() => {
          navigate("/coursePage");
          dispatch(setActiveCourse({ index }));
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default EmployeeCourseCard;
