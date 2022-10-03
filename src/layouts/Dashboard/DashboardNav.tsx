import React from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css';
import onCultureLogo from "../../Assets/Images/onculture-logo.png"
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../Assets/Images/companyAvatar.svg'

type BoardProp = {
    profileImage?: any;
    setShowModal: (showModal:boolean) => void;
}

const DashboardNav = ({ profileImage, setShowModal }: BoardProp) => {
    
    const navigate = useNavigate()
  return (
      <div className={boardStyle.mainNav}>
          <div className={boardStyle.boardLogo}>
            <img src={onCultureLogo} alt="onculture-logo" onClick={()=> navigate('/')}/>
          </div>
          <div className={boardStyle.boardBtn}>
              <Link to="/create-team">
                  <button className={boardStyle.createTeam}>
                      Create a Team
                  </button>
              </Link>
              <button className={boardStyle.inviteEmployee} onClick={()=> setShowModal(true)}>
                  Invite Employee
              </button>
              <div className={boardStyle.picBox}>
                  {profileImage ? <img src={profileImage} alt="onculture-user" className={boardStyle.picBoxImg} /> :
                      <img src={avatar} alt="onculture-user-image" className={boardStyle.picBoxImg}/>}
              </div>
          </div>
    </div>
  )
}

export default DashboardNav