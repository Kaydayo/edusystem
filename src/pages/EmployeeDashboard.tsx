import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeNav from '../layouts/EmployeeDashboard/EmployeeNav'
import EmployeePages from '../layouts/EmployeeDashboard/EmployeePages'
import EmployeeProfile from '../layouts/EmployeeDashboard/EmployeeProfile'
import { RootState, useAppSelector } from '../redux/store'
import employeeStyle from '../styles/EmployeeDashboard/EmployeeDashboard.module.css'

const EmployeeDashboard = () => {
  const { profileInfo, userToken } = useAppSelector((state: RootState) => state.user)

 
  
  return (
    <div className={employeeStyle.main}>
      <EmployeeNav />
      
      <div className={employeeStyle.subMain}>
        <div>
          <EmployeeProfile
            role={profileInfo.company[0].role }
            dept={profileInfo.company[0].department }
            team={profileInfo.company[0].team }
            grade={ profileInfo.company[0].grade}
            name={profileInfo.user.firstName }
            email={profileInfo.user.email} />
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