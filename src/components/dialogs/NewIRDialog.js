import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_IMAGE_REQUEST } from "../../graphql/mutation";
import { useDispatch } from "react-redux";
import { addToast, toggleLoading } from "../../slices/appSlice";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const defaultValue = {
  image: "",
  tag: "",
  remark: "",
  schema64: "",
};

export default function NewIRDialog(props) {
  const dispatch = useDispatch();
  const { open, handleClose } = props;
  const [input, setInput] = useState(defaultValue);
  const [jsSchema, setJsSchema] = useState({});
  const [addImageRequest] = useMutation(ADD_IMAGE_REQUEST);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(input);
    dispatch(toggleLoading());

    const schema64 = Buffer.from(JSON.stringify(jsSchema)).toString("base64");
    const temp = { ...input, schema64 };
    addImageRequest({ variables: { input: temp } })
      .then(() => {
        dispatch(
          addToast({
            message: "Successfully Created Image",
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
          Request for new Docker Image
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information to request for a new docker image.
          </DialogContentText>
          <Grid container spacing={1} sx={{ pl: 1 }}>
            <Grid item xs={12} sm={8}>
              <TextField
                autoFocus
                margin="dense"
                id="image"
                label="Docker Image Name"
                required
                value={input.image}
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="dense"
                id="tag"
                required
                label="Tag Label"
                fullWidth
                value={input.tag}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="remark"
                label="Remark"
                fullWidth
                variant="standard"
                multiline
                maxRows={4}
                value={input.remark}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ pt: 2 }}>
                <Typography color="text.secondary" gutterBottom>
                  Parameter JSON Schema
                </Typography>
                <JSONInput
                  id="a_unique_id"
                  theme="light_mitsuketa_tribute"
                  colors={{
                    default: "#000000",
                  }}
                  style={{
                    body: {
                      fontSize: "14px",
                    },
                  }}
                  // width="622px"
                  locale={locale}
                  height="380px"
                  onChange={(e) => {
                    setJsSchema(e.jsObject);
                  }}
                />
              </FormControl>
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
