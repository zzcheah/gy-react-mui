import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  image: {
    // width: "80%",
    // maxHeight: "128px",
    minWidth: "256px",
    margin: "0px 32px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function WelcomeBack() {
  const user = useSelector((state) => state.auth.user);
  const classes = useStyles();

  return (
    <Paper className={classes.root} sx={{ bgcolor: "rgb(200, 250, 205)" }}>
      <div>
        <Typography gutterBottom>Hello 👋,</Typography>
        <Typography variant="h5" gutterBottom>
          {user.name}!
        </Typography>
        <Typography variant="body2">
          Welcome back to GPU Yard. Keep hustling and have a nice day 🙂😊
        </Typography>
      </div>
      <div className={classes.image}>
        <img src="images/illustration_seo.svg" alt="welcome" width="100%"></img>
      </div>
    </Paper>
  );
}
