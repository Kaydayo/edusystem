import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { stat } from 'fs'
// import { act } from 'react-dom/test-utils'
import { SubscriptionState, UserState } from "../../types/interfaces";
import axios from "axios";

export const paySubscription = createAsyncThunk(
  "subscription/pay",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { subscription } = getState() as {
        subscription: SubscriptionState;
      };
      const { user } = getState() as { user: UserState };

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Cache-control": "no-cache",
          mode: "cors",
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const { data } = await axios.post(
        "/users/payCourse",
        {
          // courses: subscription.selections
        },
        config
      );

      console.log(data, "pay subscription");
      localStorage.setItem("userDetails", JSON.stringify(data.payload));
      localStorage.setItem("userToken", data.accessToken);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
