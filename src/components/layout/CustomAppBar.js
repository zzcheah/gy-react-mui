import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";
import NotificationPopover from "./NotificaitonPopover";
import AccountPopover from "./AccountPopover";

const recolor = {
  color: "rgb(33, 43, 54)",
};

const CustomAppBar = (props) => {
  const { classes, handleDrawerToggle } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(event.currentTarget.id);
  };

  const accountMenuId = "account-menu";
  const accountHandle = {
    open: activeMenu === accountMenuId,
    handleMenuClose,
    anchorEl,
  };

  const notificationMenuId = "notification-menu";
  const notificationHandle = {
    open: activeMenu === notificationMenuId,
    handleMenuClose,
    anchorEl,
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            sx={recolor}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              id={notificationMenuId}
              aria-label="show 17 new notifications"
              aria-controls={notificationMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenuOpen}
              sx={recolor}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              id={accountMenuId}
              edge="end"
              aria-label="account of current user"
              aria-controls={accountMenuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              sx={recolor}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <NotificationPopover handle={notificationHandle} />
      <AccountPopover handle={accountHandle} />
    </div>
  );
};

export default CustomAppBar;
