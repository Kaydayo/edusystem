import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "../../types/interfaces";
import axios from 'axios'


interface Invite{
    fullName: string;
    email: string;
    role: string;
    department: string;
    course: string

}
export const inviteEmployees = createAsyncThunk(
    'employee/invite',
    // callback function
    async ({
        fullName,
        email,
        role,
        department,
        course
    }: Invite, { getState, rejectWithValue }) => {
        try {

            const { user } = getState() as { user: UserState };
            // user.

            console.log(user.userToken, "the user")
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.userToken}`
                },
            }
            // make request to backend
            const { data } = await axios.post(
                '/employee/invite',
                {
                    fullName,
                    email,
                    role,
                    department,
                    course
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
