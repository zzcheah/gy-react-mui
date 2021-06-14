import {
  Collapse,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { PROJECT_DESC, PROJECT_OBJECTIVE } from "../../app/project";
import useWindowPosition from "../../hook/useWindowPosition";
import ReusableBox from "./ReusableBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: "64px",
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

const Description = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="project-desc">
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <ReusableBox>
          <h2 className={classes.title}>What is GPU Yard?</h2>
          <Typography variant="h6" align="justify">
            {PROJECT_DESC}
          </Typography>
          <br />
          <h3 style={{ fontSize: "2.5rem" }} className={classes.title}>
            Main Objective
          </h3>
          <Typography variant="h6" align="justify">
            {PROJECT_OBJECTIVE}
          </Typography>
        </ReusableBox>
      </Collapse>
    </div>
  );
};

export default Description;
