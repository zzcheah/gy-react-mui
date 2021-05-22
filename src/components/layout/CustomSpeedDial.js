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

const actions = [
  {
    icon: <QueuePlayNextIcon />,
    name: "Add Task Worker",
    path: "/notifications",
  },
  {
    icon: <AddPhotoAlternateIcon />,
    name: "Add Docker Image",
    path: "/dashboard",
  },
];

export default function CustomSpeedDial() {
  const [currentDialog, setCurrentDialog] = useState(null);
  const history = useHistory();

  const handleClose = () => {
    setCurrentDialog(null);
  };

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
          {actions.map((action, index) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => setCurrentDialog(index)}
            />
          ))}
        </SpeedDial>
      </Box>
      <AddWorkerDialog open={currentDialog === 0} handleClose={handleClose} />
      <AddImageDialog open={currentDialog === 1} handleClose={handleClose} />
    </div>
  );
}
