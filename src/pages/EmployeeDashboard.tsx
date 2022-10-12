import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeNav from '../layouts/EmployeeDashboard/EmployeeNav'
import EmployeePages from '../layouts/EmployeeDashboard/EmployeePages'
import EmployeeProfile from '../layouts/EmployeeDashboard/EmployeeProfile'
import employeeStyle from '../styles/EmployeeDashboard/EmployeeDashboard.module.css'

const EmployeeDashboard = () => {
  return (
    <div className={employeeStyle.main}>
      <EmployeeNav />
      
      <div className={employeeStyle.subMain}>
        <div>
          <EmployeeProfile />
        </div>
        <div>
          <EmployeePages/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard