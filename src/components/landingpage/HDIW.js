import {
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ReusableBox from "./ReusableBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: "Fira Sans",
      fontSize: "3rem",
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
  })
);

const HDIW = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="project-hdiw">
      <ReusableBox>
        <h2 className={classes.title}>How It Works?</h2>
        <Typography variant="h6" align="center" gutterBottom>
          While the use case looks simple and easy to use, the backend of the
          system is complicated. Read the docs to learn more about the system
          and the efforts in creating this system.
        </Typography>
        <Button
          component={Link}
          to={"/docs"}
          variant="outlined"
          sx={{ mt: 3, mb: -1 }}
        >
          Read Docs 📘
        </Button>
      </ReusableBox>
    </div>
  );
};

export default HDIW;
