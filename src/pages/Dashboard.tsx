import React from 'react'
import Nav from '../components/Nav'
import DashboardNav from '../layouts/Dashboard/DashboardNav'
import Profile from '../layouts/Dashboard/Profile'
import dashBoardStyle from '../styles/Dashboard/Dashboard.module.css'

const Dashboard = () => {
  return (
      <div className={dashBoardStyle.mainBoard}>
          <div>
              <DashboardNav />
          </div>
          <div>
              <Profile/>
          </div>
    </div>
  )
}

export default Dashboard