// @ts-nocheck
import { useMutation } from "@apollo/client";
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
import { useHistory } from "react-router-dom";
import { SET_READ_NOTIFICATION } from "../../graphql/mutation";

const NotificationPopover = ({ handle, data }) => {
  const { open, anchorEl, handleMenuClose } = handle;
  const history = useHistory();
  const { read, unread } = data;
  const [setReadNotification] = useMutation(SET_READ_NOTIFICATION);

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

  const handleClick = (item) => {
    setReadNotification({ variables: { input: item.id } });
    history.push(item.link);
  };

  return (
    <Popover {...props.popover}>
      <Box sx={{ padding: "16px 26px" }}>
        <Typography variant="h6">
          <b>Notifications</b>
        </Typography>
        <Typography sx={{ color: "text.secondary" }} variant="body2">
          You have {unread.length} unread messages
        </Typography>
      </Box>
      <Divider />
      {unread.length > 0 ? (
        <List sx={{ width: "360px" }}>
          <ListItem>
            <ListItemText secondary="NEW"></ListItemText>
          </ListItem>
          {unread.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={() => handleClick(item)}
              sx={{ backgroundColor: "rgba(145, 158, 171, 0.16)", mb: "2px" }}
            >
              <ListItemAvatar>
                <Avatar>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.content} secondary={item.createdAt} />
            </ListItem>
          ))}
        </List>
      ) : null}
      {read.length > 0 ? (
        <List sx={{ width: "360px" }}>
          <ListItem>
            <ListItemText secondary="BEFORE THAT"></ListItemText>
          </ListItem>
          {read.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={() => handleClick(item)}
              sx={{ mb: "2px" }}
            >
              <ListItemAvatar>
                <Avatar>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.content} secondary={item.createdAt} />
            </ListItem>
          ))}
        </List>
      ) : null}
    </Popover>
  );
};

export default NotificationPopover;
