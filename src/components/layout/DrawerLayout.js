import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar";
import CustomAppBar from "./CustomAppBar";
import { useState } from "react";
import CustomSpeedDial from "./CustomSpeedDial";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    boxSizing: "border-box",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    maxWidth: "100%",
    // backgroundColor: "cyan",
    [theme.breakpoints.up("md")]: {
      maxWidth: `calc(100% - ${drawerWidth}px)`,
      padding: theme.spacing(3),
    },
  },
}));

function DrawerLayout(props) {
  const { children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar classes={classes} handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <SideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          classes={classes}
        />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{ padding: "0 15px " }}>{children}</div>
      </main>
      <CustomSpeedDial />
    </div>
  );
}

export default DrawerLayout;
