// features/user/userSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { platform } from 'os'
import SubscriptionCourse, { ISubCourse } from '../layouts/CompanyForms/SubscriptionCourse'
import { SingUp, SubscriptionState, UserState } from '../types/interfaces'
import { createPassword, getNameByVeify, getUserDetails, googleLogin, registerUser, userLogin } from './actions/usersAction'
import { subScriptionCourse } from '../constants/data'
import { paySubscription } from './actions/subscriptionAction'

const subscriptions = subScriptionCourse

const initialState: SubscriptionState = {
    selections: [],
    subscriptions: [],
    loading: false,
    error: null,
    success: false,
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

    },
    extraReducers: {
        [paySubscription.pending.toString()]: (state) => {
            state.loading = true
            state.error = null
        },
        [paySubscription.fulfilled.toString()]: (state, { payload }) => {
            console.log(payload, 'getege')
            state.loading = false
            state.success = true
        },
        [paySubscription.rejected.toString()]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }

})

export const { addCourseToSelectList, addAmountToSelect, postAllSubscriptions } = subscriptionSlice.actions

export default subscriptionSlice.reducer
