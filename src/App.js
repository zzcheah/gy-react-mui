import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CssBaseline, LinearProgress, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "./app/theme";
import Toast from "./components/Toast";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import { GENERAL_PAGES } from "./app/constants";
import EditProfile from "./pages/subpages/EditProfile";
import UnderMaintenance from "./components/util/UnderMaintenance";

function LoadingBlur({ children }) {
  const loading = useSelector((state) => state.app.loading);

  const style = {
    blur: {
      opacity: loading ? "0.3" : "1",
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

function PrivateRoute({ component, ...rest }) {
  const auth = useSelector((state) => state.auth.user);
  return (
    <Route
      exact
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
}

function App() {
  console.log("Rendering App");

  const jwt = useSelector((state) => state.auth.jwt);

  const httpLink = createHttpLink({
    uri: "http://localhost:2358/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: jwt ? `Bearer ${jwt}` : "",
      },
    };
  });

  // const defaultOptions = {
  //   watchQuery: {
  //     fetchPolicy: "no-cache",
  //     errorPolicy: "ignore",
  //   },
  //   query: {
  //     fetchPolicy: "no-cache",
  //     errorPolicy: "all",
  //   },
  // };

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    // defaultOptions: defaultOptions,
  });

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
                {GENERAL_PAGES.map((item, index) => (
                  <PrivateRoute
                    exact
                    key={index}
                    path={item.path}
                    component={item.page}
                  />
                ))}
                <PrivateRoute path="/editProfile" component={EditProfile} />
                <PrivateRoute path="/settings" component={UnderMaintenance} />

                {/* <PrivateRoute
              path="/requestForm"
              auth={auth}
              component={RequestForm}
            /> */}
                <Redirect to="/dashboard" />
              </Switch>
            </LoadingBlur>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
