import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ImageRequests from "../components/dashboard/ImageRequests";
import TopImages from "../components/dashboard/TopImages";
import TotalIssues from "../components/dashboard/TotalIssues";
import TotalRequests from "../components/dashboard/TotalRequests";
import TotalUsers from "../components/dashboard/TotalUsers";
import WelcomeBack from "../components/dashboard/WelcomeBack";
import WorkerApplication from "../components/dashboard/WorkerApplication";
import WorkersStatus from "../components/dashboard/WorkersStatus";
import DrawerLayout from "../components/layout/DrawerLayout";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

          <Grid item xs={12} lg={6}>
            <TopImages />
          </Grid>
        </Grid>
      </div>
    </DrawerLayout>
  );
};

export default Dashboard;
