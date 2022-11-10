import React from "react";
import EmployeeNav from "./EmployeeNav";
import SideNav from "./SideNav";
import courseStyle from "../../styles/EmployeeDashboard/EmployeeDashboard.module.css";

const CoursePage = () => {
  return (
    <div>
      <div className={courseStyle.employeeHeader}>
        <EmployeeNav />
      </div>
      <SideNav />
    </div>
  );
};

export default CoursePage;
