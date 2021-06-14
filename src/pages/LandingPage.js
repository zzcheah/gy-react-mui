import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Divider } from "@material-ui/core";
import Header from "../components/landingpage/Header";
import Description from "../components/landingpage/Description";
import HDIW from "../components/landingpage/HDIW";
import UseCase from "../components/landingpage/UseCase";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    // backgroundColor: "rgb(182,209,238)",
    backgroundColor: "rgb(210,227,245)",
  },
  toolbar: theme.mixins.toolbar,
}));
export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <CssBaseline />
        <Container>
          <Header />
          <Description />
          {/* <MainObjective /> */}
          <Divider sx={{ pt: 6 }} />
          <UseCase />
          <HDIW />
        </Container>
      </div>
    </div>
  );
}
