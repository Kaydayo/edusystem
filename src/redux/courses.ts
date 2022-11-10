// features/user/userSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { stat } from "fs";
// import { platform } from "os";
// import SubscriptionCourse, {
//   ISubCourse,
// } from "../layouts/CompanyForms/SubscriptionCourse";
import {
  SingUp,
  SubscriptionState,
  UserState,
  CourseState,
} from "../types/interfaces";
// import {
//   createPassword,
//   getNameByVeify,
//   getUserDetails,
//   googleLogin,
//   registerUser,
//   userLogin,
// } from "./actions/usersAction";
// import { courseContent } from "../constants/data";
// import { paySubscription } from "./actions/subscriptionAction";
// import { string } from "prop-types";
// import * as immer from "immer";
import { completeCourse } from "./actions/coursesAction";

// const courses = [...courseContent];
// const courses = localStorage.getItem("courseDetails")
//   ? JSON.parse(localStorage.getItem("courseDetails") as string)
//   : null;

const activeCourseIndex = localStorage.getItem("activeCourseIndex")
  ? parseInt(JSON.parse(localStorage.getItem("activeCourseIndex") || ""))
  : 0;

const initialState: CourseState = {
  courses: [],
  activeCourse: [],
  // activeLesson: {},
  activeCourseIndex,
  loading: false,
  error: null,
  success: false,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    //   state.courses = immer.produce(state.courses, (draftState) => {
    //     draftState[action.payload.id].contents[action.payload.subId].completed =
    //       true;
    //   });
    // },

    setActiveCourse: (state, action: PayloadAction<{ index: number }>) => {
      state.activeCourseIndex = action.payload.index;

      localStorage.setItem(
        "activeCourseIndex",
        JSON.stringify(action.payload.index)
      );
    },

    // setActiveLesson: (
    //   state,
    //   action: PayloadAction<{ id: number; subId: number }>
    // ) => {
    //   state.activeLesson =
    //     courses[action.payload.id].contents[action.payload.subId];
    // },
  },

  extraReducers: {
    [completeCourse.pending.toString()]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [completeCourse.fulfilled.toString()]: (state, { payload }) => {
      console.log(payload, "lllll");
      state.loading = false;
      state.success = true;
    },
    [completeCourse.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const { setActiveCourse } = courseSlice.actions;

export default courseSlice.reducer;
