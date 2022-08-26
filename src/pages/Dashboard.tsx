import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Modal from '../components/ Modal'
import Nav from '../components/Nav'
import DashboardNav from '../layouts/Dashboard/DashboardNav'
import DashboardPages from '../layouts/Dashboard/DashboardPages'
import InviteEmployee from '../layouts/Dashboard/InviteEmployee'
import Profile from '../layouts/Dashboard/Profile'
import { RootState, useAppSelector } from '../redux/store'
import dashBoardStyle from '../styles/Dashboard/Dashboard.module.css'

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { profileInfo } = useAppSelector((state: RootState) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (!profileInfo) {
      navigate('/company-onboarding')

    }


  }, [profileInfo])

  return (
    <div className={dashBoardStyle.mainBoard}>
      <div>
        <DashboardNav setShowModal={setShowModal} />
      </div>
      <div>
        <Profile data={profileInfo} />
      </div>
      <div>
        <DashboardPages />
      </div>
      <div className={dashBoardStyle.mdashboard}>
        <Outlet />
      </div>
      <div>
        <Modal show={showModal} setShowModal={setShowModal} children={<InviteEmployee />} />
      </div>
    </div>
  )
}

export default Dashboard