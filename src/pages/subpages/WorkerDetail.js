import { useQuery } from "@apollo/client";
import { Chip, Container, Divider, Grid, Typography } from "@material-ui/core";
import DrawerLayout from "../../components/layout/DrawerLayout";
import CustomCard from "../../components/util/CustomCard";
import { LIST_WORKERS } from "../../graphql/query";

const WorkerDetail = (props) => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(LIST_WORKERS);

  return (
    <DrawerLayout>
      <Container sx={{ mb: 6 }}>
        {loading ? (
          "loading..."
        ) : (
          <WorkerInfo workers={data.workerList} id={id} />
        )}
      </Container>
    </DrawerLayout>
  );
};

const WorkerInfo = (props) => {
  const { workers, id } = props;
  const worker = workers.find((worker) => worker.id === id);
  if (worker == null) return <div>Worker not found!!</div>;
  const { name, maxTasks, ipAddress, status, runningTasks } = worker;

  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        <b>Task Worker Detail</b>
      </Typography>
      <CustomCard>
        <Typography variant="h6">Task Worker ID:</Typography>
        <Typography variant="body1">{id}</Typography>
        <CustomDivider />

        <Typography variant="h6">Name:</Typography>
        <Typography variant="body1">{name}</Typography>
        <CustomDivider />

        <Typography variant="h6">Status:</Typography>
        <Chip
          label={status ? status : "Checking"}
          color={status === "Active" ? "success" : "default"}
        />
        <CustomDivider />

        <Typography variant="h6">Running Task:</Typography>
        <Typography variant="body1">{runningTasks.length}</Typography>
        <CustomDivider />

        <Typography variant="h6">IP Address:</Typography>
        <Typography variant="body1">{ipAddress}</Typography>
        <CustomDivider />

        <Typography variant="h6">Max Concurrent Tasks:</Typography>
        <Typography variant="body1">{maxTasks}</Typography>
      </CustomCard>
    </div>
  );
};

const CustomDivider = () => {
  return <Divider sx={{ mt: 3, mb: 2 }} />;
};

export default WorkerDetail;
