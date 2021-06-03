import Box from "@material-ui/core/Box";
import SpeedDial from "@material-ui/core/SpeedDial";
import SpeedDialIcon from "@material-ui/core/SpeedDialIcon";
import SpeedDialAction from "@material-ui/core/SpeedDialAction";
import EditIcon from "@material-ui/icons/Edit";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";
import { useHistory } from "react-router-dom";
import AddWorkerDialog from "../dialogs/AddWorkerDialog";
import { useState } from "react";
import AddImageDialog from "../dialogs/AddImageDialog";
import { useSelector } from "react-redux";
import ListAltIcon from "@material-ui/icons/ListAlt";
import NewIRDialog from "../dialogs/NewIRDialog";

export default function CustomSpeedDial() {
  const [currentDialog, setCurrentDialog] = useState(null);
  // @ts-ignore
  const role = useSelector((state) => state.auth.user.role);
  const history = useHistory();

  const handleClose = () => {
    setCurrentDialog(null);
  };

  const admin_actions = [
    {
      icon: <QueuePlayNextIcon />,
      name: "Add Task Worker",
      onClick: () => setCurrentDialog(0),
    },
    {
      icon: <AddPhotoAlternateIcon />,
      name: "Add Docker Image",
      onClick: () => setCurrentDialog(1),
    },
  ];

  const user_actions = [
    {
      icon: <AddPhotoAlternateIcon />,
      name: "Request for New Image",
      onClick: () => setCurrentDialog(2),
    },
    {
      icon: <ListAltIcon />,
      name: "Add Request",
      onClick: () => history.push("/addRequest"),
    },
  ];
  return (
    <div>
      <Box
        sx={{
          height: 200,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          {role === "USER"
            ? user_actions.map((action, index) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.onClick}
                />
              ))
            : admin_actions.map((action, index) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={action.onClick}
                />
              ))}
        </SpeedDial>
      </Box>
      <AddWorkerDialog open={currentDialog === 0} handleClose={handleClose} />
      <AddImageDialog open={currentDialog === 1} handleClose={handleClose} />
      <NewIRDialog open={currentDialog === 2} handleClose={handleClose} />
    </div>
  );
}
