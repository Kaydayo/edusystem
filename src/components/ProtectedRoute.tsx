import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { getUserDetails } from '../redux/actions/usersAction'
import { useAppDispatch, useAppSelector } from '../redux/store'

const ProtectedRoute = () => {
    const { profileInfo } = useAppSelector((state) => state.user)

    // show unauthorized screen if no user is found in redux store
    if (!profileInfo) {
        return (
            <div className='unauthorized'>
                <h1>Unauthorized :(</h1>
                <span>
                    <NavLink to='/login'>Login</NavLink> to gain access
                </span>
            </div>
        )
    }

    // returns child route elements
    return <Outlet />
}
export default ProtectedRoute