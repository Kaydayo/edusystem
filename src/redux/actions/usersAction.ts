import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { string } from "yup"
import { UserState } from "../../types/interfaces"






// userAction.js
export const registerUser = createAsyncThunk(
    'user/signup',
    // callback function
    async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // make request to backend
            const { data
            } = await axios.post(
                `/users/sign-up`,
                { email, password },
                config
            )
            localStorage.setItem('userToken', data.payload.token)
           
            if (data.success === false) {
                return rejectWithValue(data.message)
            }
            return data

        } catch (error: any) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }

    }
)

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }: { email: string, password: string }, { rejectWithValue, dispatch }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                '/users/login',
                { username: email, password },
                config
            )
            if (data.success !== true) {
                return rejectWithValue(data.message)
            }
            localStorage.setItem('userToken', data.payload.accessToken)
            localStorage.setItem('userDetails', JSON.stringify(data.payload))

            dispatch(getUserDetails())
            return data
        } catch (error: any) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const googleLogin = createAsyncThunk(
    'user/google',
    async (res: any, { rejectWithValue }) => {
       
        try {
            const { data } = await axios.post('/google-authentication', {
                token: res.tokenId
            }, {
                headers: {
                    'Content-Type': 'application/json',

                }
            })

         
            localStorage.setItem('userToken', data.token)
            localStorage.setItem('userDetails', JSON.stringify(data))

            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }

    }
)

export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState() as { user: UserState };
           
            // configure authorization header with user's token
            const config = {
                headers: {
                    'Cache-control': 'no-cache'
                },
            }
            const { data } = await axios.post('/users/find-me', {
                token: user.userToken
            }, config)

          
            // if (data.success !== true) {
            //     return false
            // }
            localStorage.setItem('userDetails', JSON.stringify(data.payload))
            return data.payload
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


export const getNameByVeify = createAsyncThunk(
    'user/getMeVerify',
    async (token: any, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Cache-control': 'no-cache'
                },
            }
            const { data } = await axios.post('/users/getMeVerify', {
                token: token
            }, config)
           
            localStorage.setItem('userDetails', JSON.stringify(data.payload))
            localStorage.setItem('userToken', data.payload.token)
            return data.payload
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const createPassword = createAsyncThunk(
    'user/createPass',
    async ({ token, password }: { token: string, password: string }, { rejectWithValue }) => {
        try {

            const config = {
                headers: {
                    'Cache-control': 'no-cache'
                },
            }
            const { data } = await axios.post('/users/createPassword', {
                token: token,
                password: password
            }, config)

          
            localStorage.setItem('userDetails', JSON.stringify(data.payload))
            localStorage.setItem('userToken', data.payload.token)


            return data.payload
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

