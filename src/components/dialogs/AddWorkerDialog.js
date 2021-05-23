import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_WORKER } from "../../graphql/mutation";
import { useDispatch } from "react-redux";
import { addToast, toggleLoading } from "../../slices/appSlice";

const defaultValue = {
  name: "",
  maxTasks: "",
  ipAddress: "",
};

export default function AddWorkerDialog(props) {
  const dispatch = useDispatch();
  const { open, handleClose } = props;
  const [input, setInput] = useState(defaultValue);
  const [registerWorker] = useMutation(REGISTER_WORKER);

  // const handleClose = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(toggleLoading());
    registerWorker({ variables: { input } })
      .then(() => {
        dispatch(
          addToast({
            message: "Successfully Registered Worker",
            severity: "success",
          })
        );
        dispatch(toggleLoading());
      })
      .catch((err) => {
        addToast({
          message: err.toString(),
          severity: "error",
        });
        dispatch(toggleLoading());
      });
    setInput(defaultValue);
    handleClose();
  };

  const handleChange = (e) => {
    if (e.target.id === "maxTasks") {
      if (isNaN(e.target.value)) {
        console.log("not a number");
        e.target.value = input.maxTasks;
      }
    }
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">
          Register New Task Worker
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information below to register the worker.
          </DialogContentText>
          <Grid container spacing={1} sx={{ pl: 1, pr: 1 }}>
            <Grid item xs={12} sm={10}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Worker Name"
                required
                value={input.name}
                fullWidth
                variant="standard"
                onChange={handleChange}
                helperText="Nickname for the worker"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="dense"
                id="maxTasks"
                required
                label="Max. Concurrent Jobs"
                fullWidth
                value={input.maxTasks}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin="dense"
                required
                id="ipAddress"
                label="IP Address"
                fullWidth
                value={input.ipAddress}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
