import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MyRequestsList from "../components/request/MyRequestList";
import { logoutUser } from "../slices/authSlice";

const MyRequestPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <Container>
      <h1>Private My Requests</h1>
      <MyRequestsList />
      <Button onClick={() => history.push("/")}>Home</Button>
      <Button onClick={handleLogout}>Log Out</Button>
    </Container>
  );
};

export default MyRequestPage;
