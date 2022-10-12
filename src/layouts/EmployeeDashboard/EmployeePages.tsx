import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { employeeLinks } from "../../constants/data"
import { capitalizeFirstLetter } from '../../utils/helper'
import employeeStyle from '../../styles/EmployeeDashboard/EmployeeDashboard.module.css'

const EmployeePages = () => {
    const [curr, setCurr] = useState<string>('')
  return (
      <div >
          <div className={employeeStyle.linkDashBoard}>
              {employeeLinks.map((boardNavs, index) => (
                  <NavLink to={`/employeeDashboard/${boardNavs}`}
                      onClick={() => setCurr(boardNavs)}
                      key={index}
                      // className={`${employeeStyle.linkDashLink} ${curr === boardNavs ? employeeStyle.hoverLink : ''}`}
                      className={({ isActive }) => (isActive ? `${employeeStyle.linkDashLink} ${employeeStyle.hoverLink}` : `${employeeStyle.linkDashLink}`)}
                  >
                      {capitalizeFirstLetter(boardNavs)}
                  </NavLink>
              ))}
          </div>
      </div>
  )
}

export default EmployeePages