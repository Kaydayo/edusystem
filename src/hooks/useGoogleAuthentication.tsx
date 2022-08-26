import axios from 'axios';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

function useGoogleAuthentication() {
    const handleSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('accessToken' in response) {
            const accessToken = response.accessToken;
            console.log(accessToken)
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/google-authentication`, {
                token: accessToken
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(result)
        }
    }

    return {
        handleSuccess,
    }
}

export default useGoogleAuthentication;