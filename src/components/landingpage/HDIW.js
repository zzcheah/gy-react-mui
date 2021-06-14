import { createStyles, makeStyles, Typography } from "@material-ui/core";
import { PROJECT_OBJECTIVE } from "../../app/project";
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
    },
  })
);

const HDIW = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="project-hdiw">
      <ReusableBox>
        <h2 className={classes.title}>How It Works?</h2>
        <Typography variant="h6" align="center">
          {PROJECT_OBJECTIVE}
        </Typography>
      </ReusableBox>
    </div>
  );
};

export default HDIW;
