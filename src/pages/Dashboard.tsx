import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Modal from '../components/ Modal'
import Nav from '../components/Nav'
import TeamModal from '../components/TeamModal'
import DashboardNav from '../layouts/Dashboard/DashboardNav'
import DashboardPages from '../layouts/Dashboard/DashboardPages'
import InviteEmployee from '../layouts/Dashboard/InviteEmployee'
import Profile from '../layouts/Dashboard/Profile'
import { getUserDetails } from '../redux/actions/usersAction'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import dashBoardStyle from '../styles/Dashboard/Dashboard.module.css'
import { calNoOfSlotTotal } from '../utils/helper'

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showTeamModal, setShowTeamModal] = useState<boolean>(false)
  const { profileInfo, userToken } = useAppSelector((state: RootState) => state.user)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  
console.log(profileInfo,"juju")
  useEffect(() => {

    if (userToken === undefined ) {
      navigate('/')
    }
    if (profileInfo === null) {
      dispatch(getUserDetails())
    }
    if (profileInfo === null) {
      navigate('/login')
    }
    if ( profileInfo.company === null) {
      navigate('/company-onboarding')
    }

    if (!profileInfo && userToken) {
      dispatch(getUserDetails())
    }

    


  }, [profileInfo, userToken])

 
    return (
      <div className={dashBoardStyle.mainBoard}>
        <div>
          <DashboardNav setShowModal={setShowModal} profileImage={profileInfo.user.profilePicture} setShowTeamModal={setShowTeamModal} />
        </div>
        <div>
          <Profile
            userEmail={profileInfo.user.email}
            userProfilePicture={profileInfo.user.profilePicture}
            companyName={profileInfo.company[0].companyName}
            adminFirstName={profileInfo.user.firstName}
            userRole={profileInfo.user.role}
            userPhoneNumber={profileInfo.user.phoneNumber}
            noOfCourses={profileInfo.company[0].courses.length }
            noOfSlots={calNoOfSlotTotal(profileInfo.company[0].courses)}
          
          />
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
        <div>
          <TeamModal show={showTeamModal} setShowTeamModal={setShowTeamModal} />
        </div>
      </div>
    )
  }

  


export default Dashboard