import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

const styles = {
  root: {
    p: 4,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  submit: {
    mt: 3,
    float: "right",
  },
};

const EditProfileForm = () => {
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Function not yet implemented");
    // dispatch(
    //   loginUser({
    //     credentials,
    //     history,
    //   })
    // );
  };

  return (
    <Paper elevation={3} sx={styles.root}>
      <form
        style={{
          width: "100%", // Fix IE 11 issue.
          mt: 2,
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              name="fullName"
              variant="outlined"
              fullWidth
              id="fullname"
              label="Full Name"
              autoFocus
              value={user.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              variant="outlined"
              fullWidth
              id="phone"
              label="Phone Number"
              value={user.phone}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={user.email}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
          sx={styles.submit}
        >
          Save Changes
        </Button>
      </form>
    </Paper>
  );
};

export default EditProfileForm;
