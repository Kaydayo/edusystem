// features/user/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { platform } from 'os'
import SubscriptionCourse, { ISubCourse } from '../layouts/CompanyForms/SubscriptionCourse'
import { SingUp, SubscriptionState, UserState, CourseState } from '../types/interfaces'
import { createPassword, getNameByVeify, getUserDetails, googleLogin, registerUser, userLogin } from './actions/usersAction'
import { courseContent } from '../constants/data'
import { paySubscription } from './actions/subscriptionAction'
import { string } from 'prop-types'

const courses = [...courseContent]

const initialState :CourseState= {
    courses,
    activeCourse: [],
    loading: false,
    error: null,
    success: false,
}

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        // toActiveCourse: (state, action: PayloadAction<{constId: string, contentId: string}>) => {
        //     const presentCourse = state.courses.filter((course: any) => course.constId === action.payload.constId)
            
        //     // state.activeCourse = presentCourse[0].contents.filter((topics:any)=> topics.)
        // },
        completeCourse: (state, action: PayloadAction<{ constId?: string, subIndex: string }>) => {
            const updatCourses = state.courses.map((item) => {
                if (item.constId === action.payload.constId) {
                    item.contents.subIndex.completed = true
                }
            })

            state.courses = [...updatCourses]
        }
        
    }

})

export const { completeCourse} = courseSlice.actions

export default courseSlice.reducer
