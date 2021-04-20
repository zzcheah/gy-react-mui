import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    margin: theme.spacing(3),
    width: "464px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  image: {
    width: "100%",
    padding: "50px 0px",
  },
}));

const SideCard = ({ msg, imgPath }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography component="p" variant="h4" gutterBottom>
        {msg.map((s, i) => (
          <b key={i}>{s}</b>
        ))}
      </Typography>
      <div className={classes.image}>
        <img src={imgPath} alt="welcome" width="100%"></img>
      </div>
      <Button onClick={() => history.push("/")}>Home</Button>
    </Paper>
  );
};

export default SideCard;
