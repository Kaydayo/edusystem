import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { AdminSignup, CompanyFInal, CompanyFormEnum, InputValue } from '../types/interfaces'
import { act } from 'react-dom/test-utils'
import { registerCompany } from './actions/companyAction'



const initialState: CompanyFInal = {
    info: {
        firstName: '',
        surnName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        employeeCount: '',
        mission: '',
        vision: '',
        values: '',
        // subscription: [],
    },
    errors: {
        firstName: '',
        surnName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        employeeCount: '',
        mission: '',
        vision: '',
        values: '',
    },
    errorfound: true,
    showError: false,
    loading: false,
    error: null

}

export const companyonboardSlice = createSlice({
    name: 'companyonboard',
    initialState,
    reducers: {
        handleErrors: (state) => {
            if (state.info.firstName === '') {
                state.errors.firstName = 'First name is required';
                
            } else {
                state.errors.firstName = ''
            }
            if (state.info.surnName === '') {
                state.errors.surnName = 'Surnname is required';
            } else {
                state.errors.surnName = '';
            }
            if (state.info.email === '') {
                state.errors.email = 'Email is required';
            } else {
                state.errors.email = ''
            }
            if (state.info.companyName === '') {
                state.errors.companyName = 'Company name is required';
            } else {
                state.errors.companyName = '';
            }

            if (state.info.email === '' || !(/\S+@\S+\.\S+/.test(state.info.email))) {
                state.errors.email = 'Email is invalid';
            } else {
                state.errors.email = '';
            }

            if (state.info.firstName !== '' && state.info.surnName !== '' && state.info.email !== '' && (/\S+@\S+\.\S+/.test(state.info.email))) {
                state.errorfound = false
            } else {
                state.errorfound=true
            }
            
        },
        handleAdminStep: (state, action:PayloadAction<AdminSignup>) => {
            state.info.firstName = action.payload.firstName
            state.info.email = action.payload.email
            state.info.surnName = action.payload.surnName
            state.info.phoneNumber = action.payload.phoneNumber
        },
        handleFormInput: (state, action: PayloadAction<InputValue>) => {
            let key = action.payload.key
            state.info[key] = action.payload.value
        },
        adminStepError: (state) => {
            const checkIsEmpty = Object.values(state.errors).every(x => x !== '')
            state.errorfound = checkIsEmpty
        },
        companyStepError: (state) => {
            // const checkIsEmpty = state.errors.companyName !== ''
            // state.errorfound = checkIsEmpty
        }
    },
    extraReducers: {
        [registerCompany.pending.toString()]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerCompany.fulfilled.toString()]: (state, { payload }) => {
            state.loading = false
        },
        [registerCompany.rejected.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { handleAdminStep,handleErrors,handleFormInput, adminStepError, companyStepError} = companyonboardSlice.actions

export default companyonboardSlice.reducer