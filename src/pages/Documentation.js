import { Container, makeStyles, Paper } from "@material-ui/core";
import { useState } from "react";
import DocDrawer from "../components/documentation/DocDrawer";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SystemArchitecture from "../components/documentation/SystemArchitecture";
import TechStack from "../components/documentation/TechStack";
import WorkFlow from "../components/documentation/WorkFlow";
import RoadMap from "../components/documentation/RoadMap";
import Installation from "../components/documentation/Installation";

const list = [
  "System Architecture",
  "Work Flow",
  "Tech Stack",
  "Road Map",
  "Installation",
];

const markdowns = [
  SystemArchitecture,
  WorkFlow,
  TechStack,
  RoadMap,
  Installation,
];

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  gfm: {
    "& table": {
      padding: 0,
    },
    "& table tr": {
      borderTop: "1px solid #cccccc",
      backgroundColor: "white",
      margin: 0,
      padding: 0,
    },
    "& table tr:nth-child(2n)": {
      backgroundColor: "#f8f8f8",
    },
    "& table tr th": {
      fontWeight: "bold",
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: 0,
      padding: "6px 13px",
    },

    "& table tr td": {
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: 0,
      padding: "6px 13px",
    },

    "& table tr th :first-child": {
      marginTop: 0,
    },
    "& table tr td :first-child": {
      marginTop: 0,
    },

    "& table tr th :last-child": {
      marginBottom: 0,
    },
    "& table tr td :last-child": {
      marginBottom: 0,
    },
    "& code": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      // border: "1px solid #eaeaea",
      backgroundColor: "#f8f8f8",
      borderRadius: "3px",
    },
    "& tt": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      // border: "1px solid #eaeaea",
      backgroundColor: "#f8f8f8",
      borderRadius: "3px",
    },

    "& pre code": {
      margin: 0,
      padding: 0,
      whiteSpace: "pre",
      border: "none",
      background: "transparent",
    },

    "& .highlight pre": {
      backgroundColor: "#f8f8f8",
      // border: "1px solid #cccccc",
      fontSize: "13px",
      lineHeight: "19px",
      overflow: "auto",
      padding: "6px 10px",
      borderRadius: "3px",
    },

    "& pre": {
      backgroundColor: "#f8f8f8",
      // border: "1px solid #cccccc",
      fontSize: "13px",
      lineHeight: "19px",
      overflow: "auto",
      padding: "6px 10px",
      borderRadius: "3px",
    },
    "& pre tt ": {
      backgroundColor: "transparent",
      border: "none",
    },
  },
}));

const Documentation = () => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DocDrawer control={{ index, setIndex }} list={list}>
        <Container>
          <Paper sx={{ p: 8, minWidth: "750px" }}>
            <ReactMarkdown
              className={classes.gfm}
              remarkPlugins={[gfm]}
              children={markdowns[index]}
            />
          </Paper>
        </Container>
      </DocDrawer>
    </div>
  );
};

export default Documentation;
