import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { UserState } from "../../types/interfaces";


export interface companyData {
    firstName: string;
    surnName: string;
    phoneNumber: string;
    companyName: string;
    employeeCount: string;
    mission: string;
    vision: string;
    values: string;
    email:string
}


// userAction.js
export const registerCompany = createAsyncThunk(
    'company/signup',
    // callback function
    async ({
        firstName,
        surnName,
        phoneNumber,
        companyName,
        employeeCount,
        mission,
        vision,
        values,
        email
    }:companyData, { getState,rejectWithValue }) => {
        try {

            const { user } = getState() as { user: UserState };
            // user.
            
           console.log(user.userToken,"the user")
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.userToken}`
                },
            }
            // make request to backend
           const {data} = await axios.post(
                '/company/create-account',
                {
                    firstName,
                    surnName,
                    phoneNumber,
                    companyName,
                    employeeCount,
                    mission,
                    vision,
                    values,
                    email
                },
                config
           )
            if (data.success === false) {
                return rejectWithValue(data.message)
            }
                return data
        } catch (error: any) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }

    }
)
