import React from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css'
import editIcon from '../../Assets/Images/edit-icon.svg'
import { CgPen } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
      <div className={boardStyle.profileBoard}>
          <div className={boardStyle.leftBoard}>
              <div className={boardStyle.ppBoard}>
                  {/* <img src="" alt="" /> */}
                  <span>
                      <img src={editIcon} alt="onculture-edit-icon" />
                  </span>
              </div>
              <div className={boardStyle.profileInfo}>
                  <div className={boardStyle.profileInfoHead}>
                      <h2>The People Practice</h2>
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
                          <p>Imisi Adenekan</p>
                          <p>Imisi@thepeoplepractice.wxy</p>
                          <p>090202030348</p>
                          <p>People Manager</p>
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
                      <h4>2</h4>
                      <h4>60</h4>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Profile