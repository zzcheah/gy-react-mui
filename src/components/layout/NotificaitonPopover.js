import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";

const NotificationPopover = ({ handle }) => {
  const { open, anchorEl, handleMenuClose } = handle;

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
      sx: {
        maxHeight: "70vh",
      },
    },
  };

  return (
    <Popover {...props.popover}>
      <Box sx={{ padding: "16px 26px" }}>
        <Typography variant="h6">
          <b>Notifications</b>
        </Typography>
        <Typography sx={{ color: "text.secondary" }} variant="body2">
          You have 2 unread messages
        </Typography>
      </Box>
      <Divider />
      <List sx={{ width: "360px" }}>
        <ListItem>
          <ListItemText secondary="NEW"></ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ backgroundColor: "rgba(145, 158, 171, 0.16)", mb: "2px" }}
        >
          <ListItemAvatar>
            <Avatar>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`your request sadasd has been finish processed asdasdasdsadasd`}
            secondary="about 10 hours"
          />
        </ListItem>
        <ListItem
          button
          sx={{ backgroundColor: "rgba(145, 158, 171, 0.16)", mb: "2px" }}
        >
          <ListItemAvatar>
            <Avatar>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`your request sadasd has been finish processed`}
            secondary="about 10 hours"
          />
        </ListItem>
      </List>
      <List sx={{ width: "360px" }}>
        <ListItem>
          <ListItemText secondary="BEFORE THAT"></ListItemText>
        </ListItem>
        <ListItem button sx={{ mb: "2px" }}>
          <ListItemAvatar>
            <Avatar>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`your request sadasd has been finish processed asdasdasdsadasd`}
            secondary="about 10 hours"
          />
        </ListItem>
        <ListItem button sx={{ mb: "2px" }}>
          <ListItemAvatar>
            <Avatar>
              <Info />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`your request sadasd has been finish processed`}
            secondary="about 10 hours"
          />
        </ListItem>
      </List>
      <Divider />
    </Popover>
  );
};

export default NotificationPopover;
