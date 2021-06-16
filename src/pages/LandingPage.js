import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "../components/landingpage/Header";
import Description from "../components/landingpage/Description";
import HDIW from "../components/landingpage/HDIW";
import UseCase from "../components/landingpage/UseCase";
import Footer from "../components/landingpage/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",

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
        <CssBaseline />
        <Header />
        <Container>
          <Description />
          <UseCase />
          <HDIW />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
