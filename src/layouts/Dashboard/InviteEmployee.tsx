import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { inviteEmployees } from '../../redux/actions/inviteEmployeeAction'
import { handleInviteErrors, handleInviteInput } from '../../redux/inviteEmployee'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import inviteStyle from '../../styles/Dashboard/Invite.module.css'
import { InviteFormEnum } from '../../types/interfaces'
import SuccessState from './EmptyStates/SuccessState'
import { ToastContainer, toast } from 'react-toastify';

const InviteEmployee = () => {
    const [success, setSuccess] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const inviteFormData = useAppSelector((state: RootState) => state.inviteEmployee.info)
    const getErrors = useAppSelector((state: RootState) => state.inviteEmployee.errors)
    const errorFound = useAppSelector((state: RootState) => state.inviteEmployee.errorfound)
    const error = useAppSelector((state: RootState) => state.inviteEmployee.error)

    const { profileInfo } = useAppSelector((state: RootState) => state.user)
    const {company} = profileInfo
    
    const submitInvite = () => {
        toast(error)
        dispatch(handleInviteErrors())
        if (errorFound) {
            setSuccess(false)

        } else {
            dispatch(inviteEmployees({
                fullName: inviteFormData.fullName,
                email: inviteFormData.email,
                role: inviteFormData.jobRole,
                department: inviteFormData.department,
                course: inviteFormData.course
            }))
            setSuccess(true)
        }
    }
    return (
        <div className={inviteStyle.inviteBox}>
            <ToastContainer/>
            {!success ? <><h4>Invite Employee</h4>
                <div>
                    <label htmlFor="fullname">Your Fullname*</label>
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
                        {company[0].courses.map((course: any, index: any) => {
                            
                            return<option key={index} value={course.id}>{course.title}({course.subscriptionName})</option>
                        })}
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