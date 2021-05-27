import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { Home, Person, Settings } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../slices/authSlice";

const AccountPopover = ({ handle }) => {
  const { open, anchorEl, handleMenuClose } = handle;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser(history));
    history.push("/");
  };

  const props = {
    popover: {
      open,
      anchorEl,
      onClose: handleMenuClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    },
  };

  return (
    <Popover {...props.popover}>
      <Box sx={{ padding: "16px 26px", maxWidth: "200px" }}>
        <Typography noWrap variant="h6">
          <b>{user.name}</b>
        </Typography>
        <Typography noWrap sx={{ color: "text.secondary" }} variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <List sx={{ width: "200px", p: 1 }}>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => history.push("/editProfile")}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={() => history.push("/settings")}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "16px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "80%",
            color: "text.primary",
          }}
          onClick={handleLogout}
        >
          <b>Logout</b>
        </Button>
      </div>
    </Popover>
  );
};

export default AccountPopover;
