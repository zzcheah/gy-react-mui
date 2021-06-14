import { Box, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: theme.spacing(6),
    },
    box: {
      backgroundColor: "rgba(182,209,238,0.6)",
      padding: "32px 32px 100px",
      borderRadius: "32px",
      boxShadow:
        "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
  })
);

const ReusableBox = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.box}>{children}</Box>
    </div>
  );
};

export default ReusableBox;
