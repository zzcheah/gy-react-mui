import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { APPROVE_WORKER } from "../../graphql/mutation";
import { WORKER_APPLICATIONS } from "../../graphql/query";
import DrawerLayout from "../layout/DrawerLayout";
import CustomTable from "../util/CustomTable";

function createData(applications, approveWorker) {
  var arr = [];
  applications.forEach((item) => {
    const { id, name, maxTasks, email, createdAt } = item;
    const button = (
      <Button
        variant="contained"
        onClick={() => {
          approveWorker({
            variables: { input: id },
            update(cache) {
              cache.modify({
                fields: {
                  workerApplications(existingWARefs, { readField }) {
                    return existingWARefs.filter(
                      (waRef) => id !== readField("id", waRef)
                    );
                  },
                },
              });
            },
          });
        }}
      >
        Approve
      </Button>
    );
    arr.push({ id, name, maxTasks, email, createdAt, button });
  });
  return arr;
}

const WorkerApplicationsPage = () => {
  return (
    <DrawerLayout>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ pb: 2, pl: 2 }}
        >
          <b>Worker Applications</b>
        </Typography>
        <WATable />
      </Container>
    </DrawerLayout>
  );
};

const WATable = () => {
  const { loading, error, data } = useQuery(WORKER_APPLICATIONS);
  const [approveWorker] = useMutation(APPROVE_WORKER);

  if (loading) return <CircularProgress />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name", minWidth: 200 },
    { id: "maxTasks", label: "Max Tasks" },
    { id: "email", label: "Email" },
    { id: "createdAt", label: "Creation Time" },
    { id: "button", label: "" },
  ];

  const rows = createData(data.workerApplications, approveWorker);

  return <CustomTable rows={rows} columns={columns} />;
};

export default WorkerApplicationsPage;
