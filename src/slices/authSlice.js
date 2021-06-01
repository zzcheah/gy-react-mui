import { createSlice } from "@reduxjs/toolkit";
import { toggleLoading, addToast } from "./appSlice";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BACKEND_HOST } from "../app/constants";

// init states
var initialState = {
  user: null,
  jwt: null,
};

if (localStorage.auth) {
  const auth = localStorage.getItem("auth");
  if (auth) {
    const { profile, jwt } = JSON.parse(auth);
    const current_time = new Date().getTime() / 1000;
    const decoded = jwt_decode(jwt);
    // @ts-ignore
    if (current_time < decoded.exp) {
      initialState = { user: profile, jwt };
    }
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      state.jwt = null;
    },
    setAuth: (state, action) => {
      const { profile, jwt } = action.payload;
      state.user = profile;
      state.jwt = jwt;
    },
  },
});

// exports
const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

// thunks
export const loginUser = ({ credentials, history }) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    console.log("User logging in");

    axios
      .post(BACKEND_HOST + "authenticate", credentials)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch(setAuth(res.data));
        dispatch(
          addToast({
            message: "Successfully logged in",
            severity: "success",
          })
        );
        history.push("/dashboard");
        dispatch(toggleLoading());
      })
      .catch((err) => {
        dispatch(
          addToast({
            message: err.toString(),
            severity: "error",
          })
        );
        dispatch(toggleLoading());
      });
  };
};

export const registerUser = ({ input, history }) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    console.log("Registering User");

    axios
      .post(BACKEND_HOST + "signup", input)
      .then((res) => {
        dispatch(
          addToast({
            message: "Successfully Signed Up",
            severity: "success",
          })
        );
        history.push("/login");
        dispatch(toggleLoading());
      })
      .catch((err) => {
        dispatch(
          addToast({
            message: err.toString(),
            severity: "error",
          })
        );
        dispatch(toggleLoading());
      });
  };
};

export const logoutUser = (history) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    localStorage.clear();
    dispatch(clearAuth());
    dispatch(toggleLoading());
  };
};
