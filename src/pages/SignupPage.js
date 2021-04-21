import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SideCard from "../components/auth/SideCard";
import AuthHeader from "../components/auth/AuthHeader";
import SignupForm from "../components/auth/SignupForm";

const message = ["Avoid the hassle of setting up GPU-accelerated environment."];
const imgPath = "images/register.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    // alignItems: "stretch",
    "& *": {
      // maxHeight: "100%",
    },
  },
  form: {
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: "64px",
      alignItems: "start",
    },
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  if (user) return <Redirect to="/" />;

  return (
    <div className={classes.root}>
      <AuthHeader />
      <SideCard msg={message} imgPath={imgPath} />
      <div className={classes.form}>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
