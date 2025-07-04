import { createSlice } from "@reduxjs/toolkit";

const persistedUserProfile =
  typeof window !== "undefined" && localStorage.getItem("wpaiauth")
    ? JSON.parse(localStorage.getItem("wpaiauth"))
    : { email: "", avatar: "", first_name: "W", last_name: "A" };

const userSlice = createSlice({
  name: "userprofile",
  initialState: {
    userProfile: persistedUserProfile,
    responsedata:null,
    isloading:false,
  },
  reducers: {
    setUserProfile: (state, action) => {
      const { email, avatar, first_name, last_name } = action.payload || {};
      state.userProfile = { email, avatar, first_name, last_name };
    },
    updateUserProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    },
  },
});

export const { setUserProfile, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
