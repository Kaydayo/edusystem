import React from 'react';
import onCultureLogo from '../../Assets/Images/onculture-logo.png';
import { FaRegBell } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import employeeStyle from '../../styles/EmployeeDashboard/EmployeeDashboard.module.css'
import avatar from '../../Assets/Images/avatar.svg'
import { useNavigate } from 'react-router-dom';

const EmployeeNav = () => {
  const navigate = useNavigate()
  return (
    <div className={employeeStyle.navSection}>
      {/* onculture logo */}
      <div>
        <img src={onCultureLogo} alt="onculture-logo" onClick={() => navigate('/')} />
      </div>

      
      <div className={employeeStyle.navUser}>
        {/* bell notification */}
        <div className={employeeStyle.notifyBell}>
          <div className={employeeStyle.dot}></div>
          <FaRegBell />
        </div>

        {/* name and job role */}
        <div className={employeeStyle.nameJob}> 
          <p>Name</p>
          <p>Job</p>
        </div>


        <div className={employeeStyle.groupNav}>
          {/* avatar */}
          <div>
            <img src={avatar} alt="onculture-avatar" className={employeeStyle.navImage} />
          </div>

          {/* dropdown */}
          <div className={employeeStyle.drpDown}>
            <RiArrowDropDownLine />
          </div>
       </div>


     </div>
    </div>
  )
}

export default EmployeeNav