import React, { useState } from 'react';
import teamStyle from '../styles/Dashboard/Modal.module.css';
import { IoCloseCircle } from 'react-icons/io5';
import { MdOutlineAdd } from 'react-icons/md';
import {  FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri'
import { SwitchModalTeam } from '../types/interfaces';
import { createTeams } from '../constants/data'
import avatarIcon from '../Assets/Images/employeeAvatar3.svg'



type TeamModalProp = {
    show: boolean;
    children?: JSX.Element;
    setShowTeamModal: (showTeamModal: boolean) => void;
}
const RenameModal = () => {
    return (
        <div className={teamStyle.renameModal}>
            <h2>Rename</h2>
            <input type="text" value="Team 1"/>
            <button>
                Done
            </button>
        </div>
    )
}

const DeleteModal = () => {
    return (
        <div className={teamStyle.deleteModal}>
            <h2>Delete Team 1</h2>
            <div className={teamStyle.delBtnContainer}>
                <button>
                    No
                </button>
                <button>
                    Yes
                </button>
            </div>
        </div>
    )
}

const AssignModal = () => {
    return (
        <div className={teamStyle.assignModal}>
            <div className={teamStyle.assignSearch}>
                <input type="text" placeholder='Search...'/>
            </div>
            <div className={teamStyle.bound}>
                {
                    createTeams.map((el: any, index: any) => {
                        return (
                            <div className={teamStyle.nameData} key={index}>
                                <div>
                                    <img src={el.profilePicture ? el.profilePicture : avatarIcon} alt="" className={teamStyle.nameImage} />
                                </div>
                                <div className={teamStyle.txtAssign}>
                                    <p> {el.firstName}</p>
                                    <p>{el.email}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

const TeamModal = ({ show, children, setShowTeamModal }: TeamModalProp) => {
    const [allTeam, setAllTeam] = useState<any[]>([])
    const [toggleMembers, setToggleMembers] = useState<boolean>(false)
    const [currentSelection, setCurrentSelection] = useState<string|null>(null)


    const renderSwitchModal = () => {
        switch (currentSelection) {
            case SwitchModalTeam.ASSIGN:
                return <AssignModal />
            case SwitchModalTeam.DELETE:
                return <DeleteModal />
            case SwitchModalTeam.RENAME:
                return <RenameModal />
            default:
                return null
        }
    }

    const createDummyTeam = (existingTeam: any[]) => {
        const newTeamName = `Team ${existingTeam.length + 1}`
        const newTeamInfo = {
            name: newTeamName,
            members: []
        }

        setAllTeam([...allTeam, newTeamInfo])
    }

    return (
        <>
            {
                show && <div className={teamStyle.modalContainer}>
                    <div className={teamStyle.teamContent}>
                        <div className={teamStyle.headLabel}>
                            <IoCloseCircle className={teamStyle.teamClose} onClick={() => setShowTeamModal(false)} />
                            <h4>Create Team</h4>
                        </div>

                        <>
                            
                            {
                                allTeam.map((team: any, index: any) => {
                                    return (
                                        <div key={index} className={teamStyle.teamMain}>
                                            <div className={teamStyle.teamInfo}>
                                                {toggleMembers ?
                                                    <FaAngleDown className={teamStyle.accordionTeam} onClick={() => setToggleMembers(!toggleMembers)} /> :
                                                    <FaAngleRight className={teamStyle.accordionTeam} onClick={() => setToggleMembers(!toggleMembers)} />}
                                                <p>{team.name}</p>
                                            </div>




                                            <div className={teamStyle.teamSubMain}>
                                                <div className={teamStyle.teamInfo} onClick={()=> currentSelection ? setCurrentSelection(null):setCurrentSelection(SwitchModalTeam.RENAME)}>
                                                    <RiPencilLine className={teamStyle.renameIcon}/>
                                                    <p>Rename</p>
                                                </div>
                                                <div className={teamStyle.teamInfo} onClick={() => currentSelection ? setCurrentSelection(null) : setCurrentSelection(SwitchModalTeam.DELETE)} >
                                                    <RiDeleteBin6Line className={teamStyle.redIcon}/>
                                                    <p>Delete Team</p>
                                                </div>
                                                <div className={teamStyle.teamInfo} onClick={() => currentSelection ? setCurrentSelection(null) : setCurrentSelection(SwitchModalTeam.ASSIGN)} >
                                                    <MdOutlineAdd className={teamStyle.assign} />
                                                    <p className={teamStyle.assign}>Assign</p>
                                                </div>
                                                <div>
                                                    {
                                                        team.members.length ? <p>{team.members.length}</p> :""
                                                    }
                                                </div>

                                            </div>


                                            

                                        </div>
                                    )
                                })
                            }
                        </>
                        <div>
                            {currentSelection && <div className={teamStyle.switchModal}>
                                {renderSwitchModal()}
                            </div>}
                        </div>
                        <div className={teamStyle.placeBtn}>
                            <button className={teamStyle.teamCreateBtn} onClick={()=> createDummyTeam(allTeam)}>
                                <MdOutlineAdd className={teamStyle.btnIcon}/>
                                <p>Create</p>
                            </button>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default TeamModal