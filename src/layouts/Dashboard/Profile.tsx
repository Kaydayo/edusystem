import React, { useEffect, useState } from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css'
import editIcon from '../../Assets/Images/edit-icon.svg'
import { CgPen } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import Subscription from '../CompanyForms/Subscription'
import avatar from '../../Assets/Images/companyAvatar.svg'

type ProfileProp =  {
    userProfilePicture: any,
    companyName: string | undefined,
    adminFirstName: string | undefined,
    userEmail: string |undefined,
    userPhoneNumber: string | undefined,
    userRole: string | undefined,
}

const Profile: React.FC<ProfileProp> = ({ userPhoneNumber, companyName,adminFirstName,userEmail,userProfilePicture,userRole}: ProfileProp) => {
    // const [profileInfo, setProfileInfo] = useState<any>({companyName:"", profilePicture:"", adminName:"", email:"", phoneNumber:"", role:""})
    const navigate = useNavigate()
    
  return (
      <div className={boardStyle.profileBoard}>
          <div className={boardStyle.leftBoard}>
              <div className={boardStyle.ppBoard}>
                  {userProfilePicture ? <img src={userProfilePicture} alt="profile icon" className={boardStyle.rmPP} /> :
                      <img src={avatar} alt="profile icon" className={boardStyle.rmPP} />
                  }
                  <span>
                      <img src={editIcon} alt="onculture-edit-icon" />
                  </span>
              </div>
              <div className={boardStyle.profileInfo}>
                  <div className={boardStyle.profileInfoHead}>
                      <h2>{companyName ? companyName:" "}</h2>
                      <p>Lagos, Nigeria</p>
                  </div>
                  <div className={boardStyle.otherInfo}>
                      <div>
                          <p>Admin:</p>
                          <p>Email:</p>
                          <p>Phone:</p>
                          <p>Role:</p>
                      </div>
                      <div className={boardStyle.valInfo}>
                          <p>{adminFirstName?adminFirstName:""}</p>
                          <p>{userEmail?userEmail:""}</p>
                          <p>{userPhoneNumber?userPhoneNumber:""}</p>
                          <p>{userRole?userRole:""}</p>
                      </div>
                  </div>
              </div>
          </div>
          {/* break here */}
          <div>
              <div >
                  <Link to="/edit-profile">
                      <button className={boardStyle.editInfo}>
                          <CgPen />
                          Edit
                      </button>
                  </Link>

              </div>
              <div>
                  <h4>Subscription</h4>
                  <div className={boardStyle.slot}>
                      <p>Courses</p>
                      <p>Total Slot Purchased</p>
                  </div>
                  <div className={boardStyle.slotSub}>
                      <h4>0</h4>
                      <h4>0</h4>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Profile