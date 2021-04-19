import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { CssBaseline, LinearProgress, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import theme from "./app/theme";
import Toast from "./components/Toast";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MyRequests from "./pages/MyRequests";
import SignupPage from "./pages/SignupPage";
import { setContext } from "@apollo/client/link/context";
import { jwt } from "./slices/authSlice";

function LoadingBlur({ children }) {
  const loading = useSelector((state) => state.app.loading);

  const style = {
    blur: {
      opacity: loading ? "0.6" : "1",
      pointerEvents: loading ? "none" : "",
    },
  };

  return (
    <div>
      {loading ? <LinearProgress /> : null}
      <div style={style.blur}>{children}</div>
    </div>
  );
}

const PrivateRoute = ({ component, ...rest }) => {
  const auth = useSelector((state) => state.auth.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const httpLink = createHttpLink({
  uri: "http://localhost:2358/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  console.log(jwt);
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      authorization: jwt ? `Bearer ${jwt}` : "",
      // authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6emNoZWFoQGxpdmUuY29tIiwiZXhwIjoxNjE4ODc2MTYwLCJpYXQiOjE2MTg4NDAxNjB9.gFU7UySl2jV3Y-sFS6i453wctJ6P-gS2zusKTbhSp1Y`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log("rerendered");

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Toast />
            <LoadingBlur>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <PrivateRoute exact path="/myRequests" component={MyRequests} />
                {/* <PrivateRoute
              path="/requestForm"
              auth={auth}
              component={RequestForm}
            /> */}
              </Switch>
            </LoadingBlur>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
