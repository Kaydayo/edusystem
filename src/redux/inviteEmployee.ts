import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { AdminSignup, CompanyFInal, CompanyFormEnum, InputValue, InviteData, InviteInput} from '../types/interfaces'
import { act } from 'react-dom/test-utils'
import { inviteEmployees } from './actions/inviteEmployeeAction'
import * as immer from 'immer'



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
    loading: false,
    success: false,
    error:null

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
            // let key = action.payload.key
            // state.info[key] = action.payload.value
            // console.log(state.inf:o, "shalalala")

            state.info = immer.produce(state.info, draftState => {
                draftState[action.payload.key] = action.payload.value
            })

            
        },
    },
    extraReducers: {
        [inviteEmployees.pending.toString()]: (state) => {
            state.loading = true
            state.error = null
        },
        [inviteEmployees.fulfilled.toString()]: (state, { payload }) => {
           
            state.loading = false
            state.success = true
        },
        [inviteEmployees.rejected.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { handleInviteErrors,handleInviteInput } = inviteEmployeeSlice.actions

export default inviteEmployeeSlice.reducer