// features/user/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { SingUp, UserState } from '../types/interfaces'
import { getUserDetails, registerUser, userLogin } from './actions/usersAction'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
const profileInfo = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails') as string): null
const initialState : UserState= {
    loading: false,
    userInfo: {
        email: '',
        password:''
    },
    userToken,
    error: null,
    success: false,
    profileInfo
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleInputSignup: (state, action: PayloadAction<{ key: SingUp, value: string }>) => {
            let key = action.payload.key
            state.userInfo[key] = action.payload.value
        },
        updateToken: (state, action: PayloadAction<any>) => {
            state.userToken = action.payload
        },
        updateUserEmail: (state, action: PayloadAction<any>) => {
            state.userInfo.email = action.payload
        }
    },
    extraReducers: {
        [registerUser.pending.toString()]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled.toString()]: (state, { payload }) => {
            console.log(payload)
            state.loading = false
            state.success = true
            state.userToken = payload.payload.token
            state.userInfo.email=payload.payload.user.email
         
        },
        [registerUser.rejected.toString()]: (state, { payload }) => {
         
            state.loading = false
            state.error = payload
        },
        [userLogin.pending.toString()]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled.toString()]: (state, { payload }) => {
            state.loading = false
            console.log(state)
            state.success = true
            state.userToken = payload.payload.accessToken
            state.userInfo.email = payload.payload.email
        },
        [userLogin.rejected.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getUserDetails.pending.toString()]: (state) => {
            state.loading = true
            state.error=null
        },
        [getUserDetails.fulfilled.toString()]: (state, { payload }) => {
            state.loading = false
            state.success = true
            console.log(payload, 'from login in')
            state.userInfo.email=payload.user.email
            state.profileInfo = payload
        },
        [getUserDetails.rejected.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.success =false
        },
        
    },
   
})

export const { handleInputSignup, updateToken, updateUserEmail } = userSlice.actions

export default userSlice.reducer
