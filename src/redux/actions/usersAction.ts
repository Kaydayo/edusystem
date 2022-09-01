import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
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
    async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {
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


export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState() as { user: UserState };
            console.log(user.userToken, '======')
            // configure authorization header with user's token
            const config = {
                headers: {
                    'Cache-control': 'no-cache'
                },
            }
            const { data } = await axios.post('users/find-me', {
                token: user.userToken
            }, config)

            console.log("RESPONSE:", data)

         
            // const {data }  = req
            console.log(data, 'getUserDetails')
            if (data.success !== true) {
                return false
            }
            localStorage.setItem('userDetails',JSON.stringify(data.payload))
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

