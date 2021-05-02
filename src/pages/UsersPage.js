import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DrawerLayout from "../components/layout/DrawerLayout";

const UsersPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <DrawerLayout>
      <Typography variant="h4" component="h1">
        <b>Users</b>
      </Typography>
    </DrawerLayout>
  );
};

export default UsersPage;
