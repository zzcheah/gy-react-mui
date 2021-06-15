import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: "Fira Sans",
      fontSize: "3rem",
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
    grid: {
      paddingTop: theme.spacing(3),
      width: "100%",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10px",
    },
  })
);

const UseCase = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="project-objective">
      <h2 className={classes.title}>Sample Use Case</h2>
      <Typography align="justify" variant="h6">
        Training a machine learning model (TensorFlow)
      </Typography>
      <div className={classes.grid}>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} sm={6} md={3}>
            <StepCard>
              <Typography gutterBottom>
                <b>1. Select Docker Image </b>
              </Typography>
              <Typography color="text.secondary">
                Docker Image contains script on how to process a request.
              </Typography>
              <img src="assets/steps/1.svg" alt="choose" width="100%"></img>
            </StepCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StepCard>
              <Typography gutterBottom>
                <b>2. Enter Inputs </b>
              </Typography>
              <Typography color="text.secondary">
                Fill in image-specific parameters and upload input file.
              </Typography>
              <img src="assets/steps/2.svg" alt="fillin" width="100%"></img>
            </StepCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StepCard>
              <Typography gutterBottom>
                <b>3. Submit and Wait </b>
              </Typography>
              <Typography color="text.secondary">
                Allow the request to be processed using Docker container.
              </Typography>
              <img src="assets/steps/3.svg" alt="submit" width="100%"></img>
            </StepCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StepCard>
              <Typography gutterBottom>
                <b>4. Download Output File</b>
              </Typography>
              <Typography color="text.secondary">
                Download the output file when the request has finished
                processing.
              </Typography>
              <img src="assets/steps/4.svg" alt="download" width="100%"></img>
            </StepCard>
          </Grid>
        </Grid>
      </div>
      {/* <div className={classes.container}>
        <StepCard>
          <Typography>
            <b>1. Select Docker Image </b>
            <br />
            Docker Image contains script on how to process a request.
          </Typography>
        </StepCard>
        <StepCard>
          <Typography>
            <b>2. Enter Inputs </b>
            <br />
            Fill in image-specific parameters and upload input file.
          </Typography>
        </StepCard>
        <StepCard>
          <Typography>
            <b>3. Submit and Wait </b>
            <br />
            Allow the request to be processed using Docker container.
          </Typography>
        </StepCard>
        <StepCard>
          <Typography>
            <b>4. Download Output File</b>
            <br />
            Download the output file when the request has finished processing.
          </Typography>
        </StepCard>
      </div> */}
    </div>
  );
};

export default UseCase;

const StepCard = ({ children }) => {
  return (
    <Paper sx={{ p: 2, m: 1, height: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Paper>
  );
};
