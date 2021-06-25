import { useQuery } from "@apollo/client";
import {
  Chip,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DrawerLayout from "../components/layout/DrawerLayout";
import CustomTable from "../components/util/CustomTable";
import { LIST_WORKERS } from "../graphql/query";

function createData(workers, history) {
  var arr = [];
  workers.forEach((item) => {
    const { id, name, status, runningTasks, maxTasks, ipAddress } = item;
    const runMax = runningTasks.length + "/" + maxTasks;
    const statusChip = (
      <Chip
        label={status}
        // @ts-ignore
        color={status === "Active" ? "success" : "default"}
      />
    );
    const action = () => {
      history.push(`/workers/${id}`);
    };
    arr.push({ id, name, statusChip, runMax, ipAddress, action });
  });
  return arr;
}

const WorkerTable = ({ history }) => {
  const { loading, data, error } = useQuery(LIST_WORKERS);
  // @ts-ignore
  const role = useSelector((state) => state.auth.user.role);

  if (loading) return <CircularProgress />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const columns = [
    ...(role === "ADMIN" ? [{ id: "id", label: "Worker ID" }] : []),
    { id: "name", label: "Name" },
    { id: "statusChip", label: "Status", minWidth: 86, align: "center" },
    { id: "runMax", label: "Slots", minWidth: 100, align: "center" },
    ...(role === "ADMIN" ? [{ id: "ipAddress", label: "IP Address" }] : []),
  ];

  const rows = createData(data.workerList, history);

  return <CustomTable rows={rows} columns={columns} />;
};

const WorkersPage = () => {
  const history = useHistory();

  return (
    <DrawerLayout>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ pb: 2, pl: 2 }}
        >
          <b>Workers</b>
        </Typography>
        <WorkerTable history={history} />
      </Container>
    </DrawerLayout>
  );
};

export default WorkersPage;
