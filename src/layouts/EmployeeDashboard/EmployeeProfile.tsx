import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { CgPen } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import avatar from '../../Assets/Images/avatar.svg'
import editIcon from '../../Assets/Images/edit-icon.svg'
import RoundProgress from '../../components/RoundProgress'
import employeeStyle from '../../styles/EmployeeDashboard/EmployeeDashboard.module.css'
import { getColorGrade } from '../../utils/helper'

const EmployeeProfile = () => {
    return (
        <div className={employeeStyle.profileMain}>
            <div className={employeeStyle.bioSection}>
                {/* image and edit icon */}
                <div className={employeeStyle.ppBoard}>
                    <img src={avatar} alt="onculture-avatar" className={employeeStyle.rmPP} />
                    <span>
                        <img src={editIcon} alt="onculture-edit-icon" />
                    </span>
                </div>

                {/* employee information */}
                <div className={employeeStyle.employeeData}>
                    {/* employee name and email */}
                    <div>
                        <h2>Gloria Richards</h2>
                        <p>hello@thepeoplepractice</p>
                    </div>

                    {/* other employee information */}
                    <div className={employeeStyle.otherInfo}>
                        <div>
                            <p>Role:</p>
                            <p>Dept:</p>
                            <p>Team:</p>
                            <p>Grade:</p>
                        </div>
                        <div className={employeeStyle.valInfo}>
                            <p>Software Engineer</p>
                            <p>Engineering</p>
                            <p>Team 1</p>
                            <p>C</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={employeeStyle.progressSection}>
                <div >
                    <Link to="/edit-profile">
                        <button className={employeeStyle.editInfo}>
                            <CgPen />
                            Edit
                        </button>
                    </Link>

                </div>

                <div className={employeeStyle.report}>
                    <RoundProgress value={30} hexColor={getColorGrade(30)} label="Participation"/>
                    <RoundProgress value={60} hexColor={getColorGrade(60)} label="Timeliness" />
                    <RoundProgress value={50} hexColor={getColorGrade(50)} label="Culture Growth" />
                </div>

            </div>
        </div>
    )
}

export default EmployeeProfile