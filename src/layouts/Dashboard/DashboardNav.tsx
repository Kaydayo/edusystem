import React from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css';
import onCultureLogo from "../../Assets/Images/onculture-logo.png"
import { Link } from 'react-router-dom';

type BoardProp = {
    profileImage?: any
}

const DashboardNav = ({profileImage}:BoardProp) => {
  return (
      <div className={boardStyle.mainNav}>
          <div className={boardStyle.boardLogo}>
            <img src={onCultureLogo} alt="onculture-logo" />
          </div>
          <div className={boardStyle.boardBtn}>
              <Link to="/create-team">
                  <button className={boardStyle.createTeam}>
                      Create a Team
                  </button>
              </Link>
              <button className={boardStyle.inviteEmployee}>
                  Invite Employee
              </button>
              <div className={boardStyle.picBox}>
                  {/* <img src={profileImage} alt="onculture-user-image" /> */}
              </div>
          </div>
    </div>
  )
}

export default DashboardNav