import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/interfaces";
import axios from "axios";
import { getUserDetails } from "./usersAction";

interface CourseInfo {
  courseId: string;
  contentId: string;
}

export const completeCourse = createAsyncThunk(
  "course/complete",
  async (
    { courseId, contentId }: CourseInfo,
    { getState, rejectWithValue, dispatch }
  ) => {
    try {
      const { user } = getState() as { user: UserState };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const { data } = await axios.post(
        `/users/completeCourse`,
        {
          courseId,
          contentId,
        },
        config
      );

      console.log(data, "data");
      if (data.success === false) {
        return rejectWithValue(data.message);
      }
      dispatch(getUserDetails());

      return data;
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
