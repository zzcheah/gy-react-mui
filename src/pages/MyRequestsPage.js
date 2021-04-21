import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DrawerLayout from "../components/layout/DrawerLayout";
import MyRequestsList from "../components/request/MyRequestList";
import { logoutUser } from "../slices/authSlice";

const MyRequestPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <DrawerLayout>
      <h1>Private My Requests</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <MyRequestsList />
        </Grid>
        <Grid item xs={12} lg={8}>
          <MyRequestsList />
        </Grid>
      </Grid>

      <Button onClick={() => history.push("/")}>Home</Button>
      <Button onClick={handleLogout}>Log Out</Button>
    </DrawerLayout>
  );
};

export default MyRequestPage;
