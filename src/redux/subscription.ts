// features/user/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { platform } from 'os'
import SubscriptionCourse, { ISubCourse } from '../layouts/CompanyForms/SubscriptionCourse'
import { SingUp, SubscriptionState, UserState } from '../types/interfaces'
import { createPassword, getNameByVeify, getUserDetails, googleLogin, registerUser, userLogin } from './actions/usersAction'
import { subScriptionCourse } from '../constants/data'

const subscriptions = subScriptionCourse

const initialState: SubscriptionState = {
    selections: [],
    subscriptions:[]
}

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        addCourseToSelectList: (state, action: PayloadAction<ISubCourse>) => {
            if (action.payload.selected === true) {
                state.selections = [...state.selections, action.payload]
            } else {
                state.selections = state.selections.filter((x) => x.id !== action.payload.id)
            }
            

            const updateSubscriptions = state.subscriptions.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload 
                }
                return item
            })
            state.subscriptions = [...updateSubscriptions]
        },
        addAmountToSelect: (state, action: PayloadAction<{ id: string, amount: number, noOfSeat: number }>) => {
            const updateSelected = state.selections.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount = action.payload.amount
                    item.noOfSeats = action.payload.noOfSeat
                }

                return item
            })

            const updateSubscriptions = state.subscriptions.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount = action.payload.amount
                    item.noOfSeats = action.payload.noOfSeat
                }

                return item
            })

            state.selections = [...updateSelected]
            state.subscriptions = [...updateSubscriptions]
        },
        postAllSubscriptions: (state, action: PayloadAction<ISubCourse[]>) => {
            state.subscriptions = action.payload
        }

    }
}

)

export const { addCourseToSelectList, addAmountToSelect, postAllSubscriptions } = subscriptionSlice.actions

export default subscriptionSlice.reducer
