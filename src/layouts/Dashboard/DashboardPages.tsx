import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import boardStyle from "../../styles/Dashboard/Dashboard.module.css"
import { dashboardLinks } from '../../constants/data'
import { capitalizeFirstLetter } from '../../utils/helper'


const DashboardPages = () => {
  const [curr, setCurr] = useState<string>('bio')
  return (

    <div >
      <div className={boardStyle.linkDashBoard}>
        {dashboardLinks.map((boardNavs, index) => (
          <Link to={`/dashboard/${boardNavs}`}
            onClick={() => setCurr(boardNavs)}
            key={index}
            className={`${boardStyle.linkDashLink} ${curr === boardNavs ? boardStyle.hoverLink : ''}`}
          >
            {capitalizeFirstLetter(boardNavs)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashboardPages