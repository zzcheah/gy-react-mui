import { Button, Container, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleLoading } from "../slices/appSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    dispatch(toggleLoading());
  };

  return (
    <div>
      <Container>
        <Typography variant="h1">HelloWorld</Typography>
        <Button onClick={handleClick}>Toggle Loading</Button>
        <Button
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            history.push("/signup");
          }}
        >
          Signup
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
