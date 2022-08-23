import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { AdminSignup, CompanyFInal, CompanyFormEnum, InputValue, InviteData, InviteInput} from '../types/interfaces'
import { act } from 'react-dom/test-utils'



const initialState:InviteData = {
    info: {
        fullName: '',
        email: '',
        jobRole: '',
        department: '',
        course:'Work Place Culture'
    },
    errors: {
        fullName: false,
        email: false,
        jobRole: false,
        department: false,
        course: false,
    },
    errorfound: true,
    showError: false,

}

export const inviteEmployeeSlice = createSlice({
    name: 'inviteemployee',
    initialState,
    reducers: {
        handleInviteErrors: (state) => {
            if (state.info.fullName === '') {
                state.errors.fullName = true;

            } else {
                state.errors.fullName = false
            }
            if (state.info.jobRole === '') {
                state.errors.jobRole= true;
            } else {
                state.errors.jobRole = false;
            }
            if (state.info.email === '') {
                state.errors.email = true;
            } else {
                state.errors.email = false
            }
            if (state.info.department === '') {
                state.errors.department = true;
            } else {
                state.errors.department = false;
            }

            if (state.info.email === '' || !(/\S+@\S+\.\S+/.test(state.info.email))) {
                state.errors.email = true;
            } else {
                state.errors.email = false;
            }
            const checkNotEmpty = Object.values(state.info).every(field => field !== '')
            if (checkNotEmpty && (/\S+@\S+\.\S+/.test(state.info.email))) {
                state.errorfound = false
            } else {
                state.errorfound = true
            }

        },
       
        handleInviteInput: (state, action: PayloadAction<InviteInput>) => {
            let key = action.payload.key
            state.info[key] = action.payload.value
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { handleInviteErrors,handleInviteInput } = inviteEmployeeSlice.actions

export default inviteEmployeeSlice.reducer