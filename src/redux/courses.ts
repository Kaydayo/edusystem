// features/user/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { platform } from 'os'
import SubscriptionCourse, { ISubCourse } from '../layouts/CompanyForms/SubscriptionCourse'
import { SingUp, SubscriptionState, UserState } from '../types/interfaces'
import { createPassword, getNameByVeify, getUserDetails, googleLogin, registerUser, userLogin } from './actions/usersAction'
import { courseContent } from '../constants/data'
import { paySubscription } from './actions/subscriptionAction'

const courses = courseContent

const initialState= {
    courses: [],
    activeCourse: [],
    loading: false,
    error: null,
    success: false,
}

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        toActiveCourse: (state, action: PayloadAction<{constId: string, contentId: string}>) => {
            const presentCourse = state.courses.filter((course: any) => course.constId === action.payload.constId)
            
            // state.activeCourse = presentCourse[0].contents.filter((topics:any)=> topics.)
        }
        
    }

})

export const { } = courseSlice.actions

export default courseSlice.reducer
