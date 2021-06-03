// @ts-nocheck
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
import { BACKEND_HOST, COMMON_PAGES, GENERAL_PAGES } from "./app/constants";
import UserDetail from "./pages/subpages/UserDetail";
import AddRequestForm from "./components/request/AddRequestForm";
import RegisterWorkerPage from "./pages/RegisterWorkerPage";
import RequestDetail from "./pages/subpages/RequestDetail";

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

  const auth = useSelector((state) => state.auth);
  const { jwt, user } = auth;

  const httpLink = createHttpLink({
    uri: BACKEND_HOST + "graphql",
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

  const user_routes = [
    {
      route: (
        <PrivateRoute key={0} path="/addRequest" component={AddRequestForm} />
      ),
    },
    {
      route: (
        <PrivateRoute key={1} path="/requests/:id" component={RequestDetail} />
      ),
    },
  ];

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
                <Route exact path="/newWorker" component={RegisterWorkerPage} />
                {user
                  ? GENERAL_PAGES[user.role].map((item, index) => (
                      <PrivateRoute
                        exact
                        key={index}
                        path={item.path}
                        component={item.page}
                      />
                    ))
                  : null}
                {COMMON_PAGES.map((item, index) => (
                  <PrivateRoute
                    exact
                    key={index}
                    path={item.path}
                    component={item.page}
                  />
                ))}
                {user && user.role === "ADMIN" ? (
                  <PrivateRoute path="/users/:id" component={UserDetail} />
                ) : null}
                {user && user.role === "USER"
                  ? user_routes.map((item) => item.route)
                  : null}
                <Redirect to="/" />
              </Switch>
            </LoadingBlur>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
