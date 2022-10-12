import React from 'react'
import employeeStyle from '../../styles/EmployeeDashboard/EmployeeDashboard.module.css'
import EmployeeCourseCard from './EmployeeCourseCard'

const EmployeeCourses = () => {
  return (
      <div className={employeeStyle.employeeCourseMain}>
          <EmployeeCourseCard
              courseTitle={"Harrassment in the workplace"}
              value={45}
              duration={"2Wks"}
              timeLeft={"5 Days"}
              classes={12}
              description={"60% done with the course but 1 week behind."}
          />
    </div>
  )
}

export default EmployeeCourses