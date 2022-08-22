import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import DashboardNav from '../layouts/Dashboard/DashboardNav'
import DashboardPages from '../layouts/Dashboard/DashboardPages'
import Profile from '../layouts/Dashboard/Profile'
import dashBoardStyle from '../styles/Dashboard/Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={dashBoardStyle.mainBoard}>
      <div>
        <DashboardNav />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <DashboardPages />
      </div>
      <div className={dashBoardStyle.mdashboard}>
          <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard