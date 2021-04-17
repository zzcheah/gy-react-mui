import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toggleLoading, addToast } from "./appSlice";

const initialState = {
  user: null,
  jwt: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { profile, jwt } = action.payload;
      state.user = profile;
      state.jwt = jwt;
    },
  },
});

const { setAuth } = authSlice.actions;

export default authSlice.reducer;
export const loginUser = ({ credentials, history }) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    console.log("User logging in");

    axios
      .post("http://localhost:2358/authenticate", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(setAuth(res.data));
        dispatch(
          addToast({
            message: "Successfully logged in",
            severity: "success",
          })
        );
        history.push("/");
      })
      .catch((err) => {
        console.log("wtf");
        console.log(err);
        dispatch(
          addToast({
            message: "Invalid Credentials",
            severity: "error",
          })
        );
      })
      .finally(dispatch(toggleLoading()));
  };
};
