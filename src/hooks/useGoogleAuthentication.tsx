import axios from 'axios';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { getUserDetails, userLogin } from '../redux/actions/usersAction';
import { useAppDispatch } from '../redux/store';
import { updateToken, updateUserEmail } from '../redux/users';


// const dispatch = useAppDispatch()
function useGoogleAuthentication() {
    const dispatch = useAppDispatch()
    const handleSuccess = async (response: any) => {
        // console.log(response)
        let result: any;

        console.log(response.credential)

        result = await axios.post(`/google-authentication`, {
            token: response.credential
        }, {
            headers: {
                'Content-Type': 'application/json',
               
            }
        })
        console.log(result)


        localStorage.setItem('userToken', result.data.token)
        dispatch(getUserDetails)
        // dispatch(updateToken(result.data.token))
        // dispatch(updateUserEmail(result.data.email))
    }

    return {
        handleSuccess,
    }
}

export default useGoogleAuthentication;