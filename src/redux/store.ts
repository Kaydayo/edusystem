import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users'
import companyonboardReducer from './companyonboard'
import inviteemployeeReducer from './inviteEmployee'
// ...
const store = configureStore({
    reducer: {
        user: userReducer,
        companyonboard: companyonboardReducer,
        inviteEmployee: inviteemployeeReducer

    },
})
export type RootState = ReturnType<typeof store.getState>

export default store