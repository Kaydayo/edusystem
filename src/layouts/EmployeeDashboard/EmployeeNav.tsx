import React, { useEffect, useState } from "react";
import onCultureLogo from "../../Assets/Images/onculture-logo.svg";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import employeeStyle from "../../styles/EmployeeDashboard/EmployeeDashboard.module.css";
import avatar from "../../Assets/Images/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";

const EmployeeNav = () => {
  const navigate = useNavigate();
  const { profileInfo, userToken } = useAppSelector(
    (state: RootState) => state.user
  );
  const [employee, setEmployee] = useState<any>({
    firstName: "",
    lastName: "",
  });
  const [logout, setLogout] = useState<boolean>(false);

  console.log(profileInfo, "Lbababa");
  const getEmployee = (employees: any[], id: string) => {
    const foundEmployee = employees.filter(
      (employee: any) => employee._id === id
    );
    console.log(foundEmployee, "foundEmployee");
    setEmployee(foundEmployee[0]);
  };

  console.log(employee, "1st attepmt");
  useEffect(() => {
    getEmployee(profileInfo.company[0].employees, profileInfo.user._id);
  }, [profileInfo]);

  return (
    <div className={employeeStyle.navSection}>
      {/* onculture logo */}
      <div>
        <img
          src={onCultureLogo}
          alt="onculture-logo"
          onClick={() => navigate("/employeeDashboard/courses")}
        />
      </div>

      <div className={employeeStyle.navUser}>
        {/* bell notification */}
        <div className={employeeStyle.notifyBell}>
          <div className={employeeStyle.dot}></div>
          <FaRegBell />
        </div>

        {/* name and job role */}
        <div className={employeeStyle.nameJob}>
          <p>{employee.firstName}</p>
          <p>{employee.role}</p>
        </div>

        <div className={employeeStyle.groupNav}>
          {/* avatar */}
          <div>
            <img
              src={avatar}
              alt="onculture-avatar"
              className={employeeStyle.navImage}
            />
          </div>

          {/* dropdown */}
          <div className={employeeStyle.drpDown}>
            <RiArrowDropDownLine onClick={() => setLogout(!logout)} />
          </div>

          {logout && (
            <div className={employeeStyle.logout}>
              <p onClick={() => navigate("/employeeDashboard/courses")}>
                Profile
              </p>
              <p
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeNav;
