import { Avatar, Button, IconButton, Paper } from "@material-ui/core";

const styles = {
  root: {
    p: 8,
    display: "flex",
    justifyContent: "center",
    // height: "400px",
    alignItems: "center",
    flexDirection: "column",
  },
};

const AvatarPicker = () => {
  return (
    <Paper elevation={3} sx={styles.root}>
      <div>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <IconButton component="span">
            <Avatar sx={{ width: 128, height: 128 }} />
          </IconButton>
        </label>
      </div>
      <div
        style={{ maxWidth: "256px", textAlign: "center", paddingTop: "15px" }}
      >
        Click on the avatar to upload new profile pic
      </div>
    </Paper>
  );
};

export default AvatarPicker;
