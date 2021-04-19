import { useApolloClient } from "@apollo/client";
import { Button, Container, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleLoading } from "../slices/appSlice";
import { gql } from "@apollo/client";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const client = useApolloClient();

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
        <Button
          onClick={() => {
            history.push("/myRequests");
          }}
        >
          My Requests
        </Button>
        <Button
          onClick={() => {
            client
              .query({
                query: gql`
                  query {
                    countRequests
                  }
                `,
              })
              .then((result) => console.log(result))
              .catch((err) => console.log(err));
          }}
        >
          Get Request Count
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
