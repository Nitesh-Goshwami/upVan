import { useAuth0 } from "@auth0/auth0-react";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isLoggedin: false,
  email: "",
  img: "",
  who: "",
};

export const Login = createAsyncThunk("user/login", () => {
  const { loginWithRedirect } = useAuth0();
  return loginWithRedirect();
});

export const User = createAsyncThunk("user/user", () => {
  const { user } = useAuth0();
  return user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
      
  }
  
});

export default userSlice.reducer;
