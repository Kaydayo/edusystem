import React, { useEffect } from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css'
import editIcon from '../../Assets/Images/edit-icon.svg'
import { CgPen } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import Subscription from '../CompanyForms/Subscription'

type ProfileProp =  {
    data:any
}

const Profile: React.FC<ProfileProp> = ({ data }: ProfileProp) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (data.company.length === 0) {
            navigate(-1)
        }

    }, [data])

    
  return (
      <div className={boardStyle.profileBoard}>
          <div className={boardStyle.leftBoard}>
              <div className={boardStyle.ppBoard}>
                  <img src={data.user.profilePicture} alt="profile icon" className={boardStyle.rmPP} />
                  <span>
                      <img src={editIcon} alt="onculture-edit-icon" />
                  </span>
              </div>
              <div className={boardStyle.profileInfo}>
                  <div className={boardStyle.profileInfoHead}>
                      <h2>{data.company ? data.company.companyName:""}</h2>
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
                          <p>{data.company?data.company.admin.firstName:""}</p>
                          <p>{data.user.email}</p>
                          <p>{data.user.phoneNumber}</p>
                          <p>{data.user.role}</p>
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