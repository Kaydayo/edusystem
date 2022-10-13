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
import * as immer from 'immer'

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

        completeCourse: (state, action: PayloadAction<{ id: number, subId: number }>) => {
            // const updateCourse = (arr:any[],firstIndex:number , secondIndex:number) => {
            //     return arr.map((item, index) => {
            //         if (index === firstIndex) {
                        
            //         }
            //     })
            // }

            state.courses = immer.produce(state.courses, draftState => {
                draftState[action.payload.id].contents[action.payload.subId].completed = true 
            })
        }
        
    }

})

export const { completeCourse} = courseSlice.actions

export default courseSlice.reducer
