import * as React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      boxSizing: "border-box",
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      maxWidth: "100%",
      paddingTop: "86px",
      [theme.breakpoints.up("md")]: {
        maxWidth: `calc(100% - ${drawerWidth}px)`,
        padding: "86px 20px",
      },
    },
  })
);

export default function DocDrawer({ children, control, list }) {
  const { index, setIndex } = control;
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ color: "black" }}>
          <Typography variant="h6" noWrap component="div">
            GPU Yard Documentations
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div
          style={{
            padding: "16px 25px",
          }}
        >
          <Link to="/">
            <img src={"logo.png"} alt="logo" height="40px" />
          </Link>
        </div>

        <List>
          {list.map((title, i) => (
            <div>
              <Divider />
              <ListItem
                selected={index === i}
                button
                onClick={() => setIndex(i)}
              >
                <ListItemText>{title}</ListItemText>
              </ListItem>
            </div>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "whitesmoke" }}>
        <main className={classes.content}>
          <div style={{ padding: "0 15px " }}>{children}</div>
        </main>
      </Box>
    </Box>
  );
}
