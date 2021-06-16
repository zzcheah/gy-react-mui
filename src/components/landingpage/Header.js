import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  AppBar,
  Button,
  Toolbar,
  Collapse,
  Container,
  Box,
} from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PROJECT_TITLE } from "../../app/project";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Fira Sans",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
    },
    appbar: {
      backdropFilter: "blur(6px)",
      backgroundColor: "rgba(255, 255, 255, 0.72)",
    },
    appbarTitle: {
      color: "#333",
      fontSize: "1.2rem",
      paddingLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    box: {
      flexGrow: 1,
    },
    icon: {
      fontSize: "2rem",
    },
    container: {
      textAlign: "center",
    },
    title: {
      fontSize: "3rem",
      maxWidth: "640px",
    },
    goDown: {
      fontSize: "4rem",
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Container>
          <Toolbar variant="dense">
            <Link to="/">
              <img src={"logo.png"} alt="logo" height="40px" />
            </Link>
            <div className={classes.appbarTitle}>
              <strong>GPU Yard</strong>
            </div>
            <Box className={classes.box} />
            <Button
              component={Link}
              to={"/dashboard"}
              size="small"
              sx={{ mr: 1 }}
            >
              Dashboard
            </Button>
            <Button component={Link} to={"/docs"} size="small" sx={{ mr: 1 }}>
              Docs
            </Button>
            <Button
              component={Link}
              to={"/signup"}
              size="small"
              variant="outlined"
            >
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
        sx={{ pb: 8 }}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>{PROJECT_TITLE}</h1>
          <Scroll to="project-desc" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
