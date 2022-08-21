import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users'
import companyonboardReducer from './companyonboard'
// ...
const store = configureStore({
    reducer: {
        user: userReducer,
        companyonboard:companyonboardReducer

    },
})
export type RootState = ReturnType<typeof store.getState>

export default store