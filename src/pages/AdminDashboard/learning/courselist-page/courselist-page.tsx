import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import ActiveCourses from "../active-course/active-course";
import CourseList from "../course-list/course-list";

const CourseListPage = () => {
  return (
    <>
      <DashboardHeader>Learning</DashboardHeader>
      <ActiveCourses />
      <CourseList />
    </>
  );
};

export default CourseListPage;
