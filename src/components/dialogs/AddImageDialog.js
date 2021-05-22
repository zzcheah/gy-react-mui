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
import { ADD_NEW_IMAGE } from "../../graphql/mutation";

const defaultValue = {
  image: "",
  tag: "",
  description: "",
};

export default function AddImageDialog(props) {
  const { open, handleClose } = props;
  const [input, setInput] = useState(defaultValue);
  const [addNewImage] = useMutation(ADD_NEW_IMAGE);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    addNewImage({ variables: { input } });
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
        <DialogTitle id="form-dialog-title">Add New Docker Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information below to add a new docker image.
          </DialogContentText>
          <Grid container spacing={2} sx={{ pl: 1, pr: 1 }}>
            <Grid item xs={12} sm={7}>
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
            <Grid item xs={11}>
              <TextField
                margin="dense"
                required
                id="description"
                label="Description"
                fullWidth
                variant="standard"
                multiline
                maxRows={4}
                value={input.description}
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