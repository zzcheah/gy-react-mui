import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";

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

  const profileMenuId = "profile-menu";
  const renderProfile = (
    <Popover
      open={activeMenu === profileMenuId}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );

  const notificationMenuId = "notification-menu";
  const renderNotification = (
    <Popover
      open={activeMenu === notificationMenuId}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );

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
              id={profileMenuId}
              edge="end"
              aria-label="account of current user"
              aria-controls={profileMenuId}
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
      {renderProfile}
      {renderNotification}
    </div>
  );
};

export default CustomAppBar;
