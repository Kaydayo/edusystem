import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserDetails } from '../redux/actions/usersAction'
import { useAppDispatch, useAppSelector } from '../redux/store'
import Login from './Login'

const ProtectedRoute = () => {
    const { userToken } = useAppSelector((state) => state.user)

    // const getUser = async (token:string) => {

    // }
    
    // show unauthorized screen if no user is found in redux store
    if (!userToken) {
        return <Login/>
        
    }

    // returns child route elements
    return <Outlet />
}
export default ProtectedRoute