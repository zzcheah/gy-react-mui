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

function App() {
  console.log("rerendered");

  return (
    <>
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
    </>
  );
}

export default App;
