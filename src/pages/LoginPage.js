import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import SideCard from "../components/auth/SideCard";

const message = ["Hi there,", <br />, "Welcome back."];
const imgPath = "images/welcome.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    // backgroundColor: theme.palette.background.paper,
    "& *": {
      // maxHeight: "100%",
    },
  },
  form: {
    flexGrow: "2",
    display: "flex",
    alignItems: "center",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  if (user) return <Redirect to="/" />;

  return (
    <div className={classes.root}>
      <SideCard msg={message} imgPath={imgPath} />
      <div className={classes.form}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
