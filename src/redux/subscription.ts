// features/user/userSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { stat } from "fs";
// import { platform } from "os";
// import SubscriptionCourse, {
//   ISubCourse,
// } from "../layouts/CompanyForms/SubscriptionCourse";
import { planState, SubscriptionState } from "../types/interfaces";
// import {
//   createPassword,
//   getNameByVeify,
//   getUserDetails,
//   googleLogin,
//   registerUser,
//   userLogin,
// } from "./actions/usersAction";
import { paySubscription } from "./actions/subscriptionAction";

const initialSelectedPlan = {
  benefits: [],
  planName: "",
  price: 0,
  recommend: false,
  _createdAt: "",
  _id: "",
};

const initialState: SubscriptionState = {
  plans: [],
  selectedPlan: initialSelectedPlan,
  loading: false,
  error: null,
  success: false,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    postAllPlans: (state, action: PayloadAction<planState[]>) => {
      state.plans = action.payload;
    },
    addSelectedPlan: (state, action: PayloadAction<planState>) => {
      state.selectedPlan = action.payload;
    },
  },
  extraReducers: {
    [paySubscription.pending.toString()]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [paySubscription.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [paySubscription.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { postAllPlans, addSelectedPlan } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
