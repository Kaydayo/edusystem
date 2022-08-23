import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleInviteErrors, handleInviteInput } from '../../redux/inviteEmployee'
import { RootState } from '../../redux/store'
import inviteStyle from '../../styles/Dashboard/Invite.module.css'
import { InviteFormEnum } from '../../types/interfaces'
import SuccessState from './EmptyStates/SuccessState'

const InviteEmployee = () => {
    const [success, setSuccess] = useState<boolean>(false)

    const dispatch = useDispatch()
    const inviteFormData = useSelector((state: RootState) => state.inviteEmployee.info)
    const getErrors = useSelector((state: RootState) => state.inviteEmployee.errors)
    const errorFound = useSelector((state: RootState) => state.inviteEmployee.errorfound)
    console.log("success",success)
    const submitInvite = () => {
        dispatch(handleInviteErrors())
        if (errorFound) {
            setSuccess(false)

        } else {
            setSuccess(true)
        }
    }
    return (
        <div className={inviteStyle.inviteBox}>
            {!success ? <><h4>Invite Employee</h4>
                <div>
                    <label htmlFor="fullname">Fullname*</label>
                    <input type="text" name="fullname" id="fullname"
                        className={`${getErrors.fullName ? inviteStyle.redError : ''}`}
                        placeholder='Fullname' value={inviteFormData.fullName} onChange={(e) => {
                            dispatch(handleInviteInput({ key: InviteFormEnum.FULLNAME, value: e.target.value }))
                            dispatch(handleInviteErrors())
                        }} />
                </div>
                <div>
                    <label htmlFor="email">Email Address*</label>
                    <input type="text" name='email' id='email'
                        className={`${getErrors.email ? inviteStyle.redError : ''}`}
                        placeholder='Email Address' value={inviteFormData.email}
                        onChange={(e) => {
                            dispatch(handleInviteInput({ key: InviteFormEnum.EMAIL, value: e.target.value }))
                            dispatch(handleInviteErrors())
                        }} />
                </div>
                <div>
                    <label htmlFor="jobRole">Job Role*</label>
                    <input type="text" name='jobRole' id='jobRole'
                        className={`${getErrors.jobRole ? inviteStyle.redError : ''}`}
                        placeholder='Job Role'
                        value={inviteFormData.jobRole}
                        onChange={(e) => {
                            dispatch(handleInviteInput({ key: InviteFormEnum.JOB_ROLE, value: e.target.value }))
                            dispatch(handleInviteErrors())
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="department">Department*</label>
                    <input type="text" name='department' id='department'
                        className={`${getErrors.department ? inviteStyle.redError : ''}`}
                        placeholder='Department'
                        value={inviteFormData.department}
                        onChange={(e) => {
                            dispatch(handleInviteInput({ key: InviteFormEnum.DEPARTMENT, value: e.target.value }))
                            dispatch(handleInviteErrors())
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="course">Course*</label>
                    <select name='course' id='course'
                        className={`${getErrors.course ? inviteStyle.redError : ''}`}
                        placeholder='Please select' value={inviteFormData.course} onChange={(e) => {
                            dispatch(handleInviteInput({ key: InviteFormEnum.COURSE, value: e.target.value }))
                            dispatch(handleInviteErrors())
                        }} >
                        <option value="Workplace Harrassment">Work Place Harrassment</option>
                        <option value="Workplace Culture">Work Place Culture</option>
                    </select>
                </div>
                <div>
                    <button onClick={submitInvite}>
                        Invite
                    </button>
                </div>
            </>
                : <SuccessState/>}
        </div>
    )
}

export default InviteEmployee