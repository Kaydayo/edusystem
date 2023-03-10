import React from "react";
// import { getCourseDetails } from "../../redux/actions/coursesAction";
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store";
import employeeStyle from "../../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import EmployeeCourseCard from "./EmployeeCourseCard";

const EmployeeCourses = () => {
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );
  const { user } = profileInfo;
  return (
    <div className={employeeStyle.employeeCourseMain}>
      {user.courses.map((course: any, index: any) => {
        return (
          <div key={index}>
            <EmployeeCourseCard
              index={index}
              id={course.id}
              courseTitle={course.title}
              value={45}
              duration={`2Wks`}
              // duration={`${course.numWeeks}Wks`}
              timeLeft={"5 Days"}
              classes={12}
              description={"60% done with the course but 1 week behind."}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeCourses;
