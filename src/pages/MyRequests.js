import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../slices/authSlice";

const MyRequests = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <div>
      <h1>Private My Requests</h1>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
};

export default MyRequests;
