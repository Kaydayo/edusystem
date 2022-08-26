import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users'
import companyonboardReducer from './companyonboard'
import inviteemployeeReducer from './inviteEmployee'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'



// ...
const store = configureStore({
    reducer: {
        user: userReducer,
        companyonboard: companyonboardReducer,
        inviteEmployee: inviteemployeeReducer

    },

})
export type RootState = ReturnType<typeof store.getState>




// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store