import axios from "axios";
import { BACKEND_HOST } from "../app/constants";
import { toggleLoading, addToast } from "./appSlice";

export const submitWorkerApplication = ({ input, history }) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    console.log("Registering User");

    axios
      .post(BACKEND_HOST + "api/workerApplication", input)
      .then((res) => {
        dispatch(
          addToast({
            message: res.data,
            severity: "success",
          })
        );
        history.push("/");
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
