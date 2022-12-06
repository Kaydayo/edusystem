import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { AdminSignup, CompanyFInal, CompanyFormEnum, InputValue } from '../types/interfaces'
import { act } from 'react-dom/test-utils'
import { registerCompany } from './actions/companyAction'
import { getUserDetails, userLogin } from './actions/usersAction'
import { FormName } from '../components/FormSignUp'



const initialState: CompanyFInal = {
    info: {
        id: '',
        firstName: '',
        surnName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        employeeCount: '1-20',
        mission: '',
        vision: '',
        values: [],
        aboutCompany: ''
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
    error: false,

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

            if (state.info.phoneNumber === '') {
                state.errors.phoneNumber = 'phone number is required'
            } else {
                state.errors.phoneNumber = '';
            }

            if (state.info.email === '' || !(/\S+@\S+\.\S+/.test(state.info.email))) {
                state.errors.email = 'Email is invalid';
            } else {
                state.errors.email = '';
            }

            if (state.info.firstName !== '' && state.info.surnName !== '' && state.info.email !== '' && (/\S+@\S+\.\S+/.test(state.info.email))) {
                state.error = false
                state.errorfound = false
            } else {
                state.error = true
                state.errorfound = true
            }

        },
        handleAdminStep: (state, action: PayloadAction<AdminSignup>) => {
            state.info.firstName = action.payload.firstName
            state.info.email = action.payload.email
            state.info.surnName = action.payload.surnName
            state.info.phoneNumber = action.payload.phoneNumber
        },
        handleFormInput: (state, action: PayloadAction<InputValue>) => {
            let key = action.payload.key
            if (key !== CompanyFormEnum.VALUES) {
                state.info[key] = action.payload.value
            }

        },
        adminStepError: (state) => {
            const checkIsEmpty = Object.values(state.errors).every(x => x !== '')
            state.errorfound = checkIsEmpty
        },
        companyStepError: (state) => {
            const checkIsEmpty = state.errors.companyName !== ''
            state.errorfound = checkIsEmpty
        },
        addValuesList: (state, action: PayloadAction<string[]>) => {
            state.info.values = action.payload
        },
        updateCompanyInfo: (state, action: PayloadAction<any>) => {
            state.info = action.payload.company[0]
        }
    },
    extraReducers: {
        [registerCompany.pending.toString()]: (state) => {
            state.loading = true
            state.error = false
        },
        [registerCompany.fulfilled.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = false

            state.info = payload.company[0]
        },
        [registerCompany.rejected.toString()]: (state, { payload }) => {
            state.loading = false

            state.error = payload
        },
        [getUserDetails.fulfilled.toString()]: (state, { payload }) => {
            state.info.email = payload.user.email ? payload.user.email : ""
            state.info.firstName = payload.user.firstName ? payload.user.firstName : ""
            state.info.surnName = payload.user.surnName ? payload.user.surnName : ""
            console.log(payload.company, "jghjgfjgyeg")
            if (payload.company && payload.company.length) {
                state.info.companyName = payload.company[0].companyName ? payload.company.companyName : ""
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { handleAdminStep, handleErrors, handleFormInput, adminStepError, companyStepError, addValuesList, updateCompanyInfo } = companyonboardSlice.actions

export default companyonboardSlice.reducer