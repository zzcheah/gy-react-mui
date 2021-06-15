import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import DocDrawer from "../components/documentation/DocDrawer";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SystemArchitecture from "../components/documentation/SystemArchitecture";
import TechnologiesInvolved from "../components/documentation/TechnologiesInvolved";
import "../components/landingpage/gfm.css";

const markdowns = [SystemArchitecture, TechnologiesInvolved];

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));

const Documentation = () => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DocDrawer control={{ index, setIndex }}>
        <Container>
          <ReactMarkdown remarkPlugins={[gfm]} children={markdowns[index]} />
        </Container>
      </DocDrawer>
    </div>
  );
};

export default Documentation;
