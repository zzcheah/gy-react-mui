import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthHeader from "../components/auth/AuthHeader";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { submitWorkerApplication } from "../slices/thunks";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterWorkerPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    maxTasks: "",
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(
      submitWorkerApplication({
        input,
        history,
      })
    );
  };

  return (
    <div>
      <AuthHeader />
      <br />
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          New Worker Application
        </Typography>
        <Typography component="h2" variant="body2" gutterBottom>
          Register your interest in setting up a task worker.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Worker Nickname"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Your Email Address"
                name="email"
                type="email"
                helperText="We will send you the worker id once it is approved"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                variant="outlined"
                fullWidth
                name="maxTasks"
                label="Max Concurrent Jobs"
                id="maxTasks"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className={classes.submit}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // @ts-ignore
              color="success"
              size="large"
            >
              Register
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
