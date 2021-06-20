import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ImageRequests from "../components/dashboard/ImageRequests";
import TopImages from "../components/dashboard/TopImages";
import TotalIssues from "../components/dashboard/TotalIssues";
import TotalRequests from "../components/dashboard/TotalRequests";
import TotalUsers from "../components/dashboard/TotalUsers";
import WelcomeBack from "../components/dashboard/WelcomeBack";
import WorkerApplication from "../components/dashboard/WorkerApplication";
import WorkersStatus from "../components/dashboard/WorkersStatus";
import DrawerLayout from "../components/layout/DrawerLayout";
import MyRequestsList from "../components/request/MyRequestList";

const Dashboard = () => {
  // @ts-ignore
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Redirect to="/login" />;

  const { role } = user;
  return (
    <DrawerLayout>
      <div style={{ marginBottom: "32px", marginTop: "16px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <WelcomeBack />
          </Grid>
          <Grid item xs={12} lg={4}>
            <WorkersStatus />
          </Grid>

          {role === "ADMIN" ? (
            <>
              <Grid item xs={12} lg={6}>
                <WorkerApplication />
              </Grid>
              <Grid item xs={12} lg={6}>
                <ImageRequests />
              </Grid>

              <Grid item xs={12} lg={4}>
                <TotalUsers />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TotalRequests />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TotalIssues />
              </Grid>
            </>
          ) : null}
          {role === "USER" ? (
            <Grid item xs={12} lg={6}>
              <MyRequestsList />
            </Grid>
          ) : null}

          <Grid item xs={12} lg={6}>
            <TopImages />
          </Grid>
        </Grid>
      </div>
    </DrawerLayout>
  );
};

export default Dashboard;
