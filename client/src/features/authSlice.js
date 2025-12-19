import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage = localStorage.getItem("token")

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: tokenFromStorage ? tokenFromStorage : null,
    user: null,
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      (state.token = action.payload.token), (state.user = action.payload.user);
    },
    logout: (state) => {
      (state.token = ""), (state.user = null), localStorage.removeItem("token");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {login,logout,setLoading} = authSlice.actions

export default authSlice.reducer