import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Drawer,
  Hidden,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { GENERAL_PAGES } from "../../app/constants";
import { Person } from "@material-ui/icons";
import { useSelector } from "react-redux";

function Logo() {
  return (
    <Link to="/">
      <div
        style={{
          padding: "10px 10px 0px 10px",
          height: "86px",
          width: "100%",
        }}
      >
        <img src={"logo.png"} alt="logo" height="100%" />
      </div>
    </Link>
  );
}

function UserCard() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Box
      sx={{
        backgroundColor: "rgba(145, 158, 171, 0.16)",
        p: 2,
        m: 2,
        display: "flex",
        borderRadius: "16px",
        alignItems: "center",
      }}
    >
      <div>
        <Avatar sx={{ p: 2, mr: 2, ml: 1 }}>
          <Person />
        </Avatar>
      </div>
      <div>
        <Typography variant="body2" sx={{ pt: "2px" }}>
          <b>{user.name}</b>
        </Typography>

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {user.role ? user.role : "??? Fuck off man"}
        </Typography>
      </div>
    </Box>
  );
}

const SideBar = (props) => {
  const { window, mobileOpen, handleDrawerToggle, classes } = props;
  const history = useHistory();
  const path = history.location.pathname;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigate = (e) => {
    history.push(e.currentTarget.getAttribute("path"));
  };

  const drawer = (
    <div>
      <Logo />
      <UserCard />

      <List sx={{ "& div": { pl: 2 } }}>
        <ListItem>
          <ListItemText primary={<strong>GENERAL</strong>} />
        </ListItem>
        {GENERAL_PAGES.map((item, index) => (
          <ListItem
            button
            key={index}
            path={item.path}
            id={item.text}
            selected={item.path === path}
            onClick={handleNavigate}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default SideBar;
