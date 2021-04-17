import { Alert, Snackbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToast } from "../slices/appSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.app.toast);
  if (toast === null) return null;

  const { message, severity, duration } = toast;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open
      autoHideDuration={duration ? duration : 3000}
      onClose={() => dispatch(addToast(null))}
    >
      <Alert severity={severity ? severity : "info"}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
