import React, { useState } from 'react'
import boardStyle from '../../styles/Dashboard/Dashboard.module.css';
import onCultureLogo from '../../Assets/Images/oncultureLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../Assets/Images/companyAvatar.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';

type BoardProp = {
    profileImage?: any;
    setShowModal: (showModal: boolean) => void;
    setShowTeamModal: (showAdminModal: boolean) => void;
}

const DashboardNav = ({ profileImage, setShowModal, setShowTeamModal }: BoardProp) => {
    const [logout, setLogout] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className={boardStyle.mainNav}>
            <div className={boardStyle.boardLogo}>
                <img src={onCultureLogo} alt="onculture-logo" onClick={() => navigate('/')} />
            </div>
            <div className={boardStyle.boardBtn}>
                {/* <Link to="/create-team"> */}
                <button className={boardStyle.createTeam} onClick={() => setShowTeamModal(true)}>
                    Create a Team
                </button>
                {/* </Link> */}
                <button className={boardStyle.inviteEmployee} onClick={() => setShowModal(true)}>
                    Invite Employee
                </button>
                <div className={boardStyle.picBox}>
                    {profileImage ? <img src={profileImage} alt="onculture-user" className={boardStyle.picBoxImg} /> :
                        <img src={avatar} alt="onculture-user-image" className={boardStyle.picBoxImg} />}
                </div>
                <div className={boardStyle.drpDown}>
                    <RiArrowDropDownLine onClick={() => setLogout(!logout)} />
                </div>
                {logout && (
                    <div className={boardStyle.logout}>
                        <p
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}
                        >
                            Logout
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardNav