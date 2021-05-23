import { Container, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DrawerLayout from "../components/layout/DrawerLayout";
import UnderMaintenance from "../components/util/UnderMaintenance";

const NotificationsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <DrawerLayout>
      <Container>
        <Typography variant="h4" component="h1">
          <b>Notifications</b>
          <div style={{ maxHeight: "10vh" }}>
            <UnderMaintenance />
          </div>
        </Typography>
      </Container>
    </DrawerLayout>
  );
};

export default NotificationsPage;
