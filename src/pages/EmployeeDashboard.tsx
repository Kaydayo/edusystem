import React from 'react'
import EmployeeNav from '../layouts/EmployeeDashboard/EmployeeNav'
import EmployeeProfile from '../layouts/EmployeeDashboard/EmployeeProfile'
import employeeStyle from '../styles/EmployeeDashboard/EmployeeDashboard.module.css'

const EmployeeDashboard = () => {
  return (
    <div className={employeeStyle.main}>
      <EmployeeNav />
      
      <div>
        <EmployeeProfile/>
      </div>
    </div>
  )
}

export default EmployeeDashboard