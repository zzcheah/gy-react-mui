import { useQuery } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";
import { MY_REQUESTS } from "../../graphql/query";
import CustomTable from "../util/CustomTable";

const chips = {
  NEW: <Chip label="Pending" />,
  COMPLETED: <Chip label="Completed" color="success" />,
  PROCESSING: <Chip label="Processing" color="info" />,
  FAILED: <Chip label="Failed" color="error" />,
  DEFAULT: <Chip label="Unknown" color="warning" />,
};

function createData(requests) {
  var arr = [];
  requests.forEach((item) => {
    const { id, status, createdAt, image } = item;
    const statusChip = chips[status] ? chips[status] : chips["DEFAULT"];
    arr.push({ id, statusChip, image, createdAt });
  });
  return arr;
}

const MyRequestsList = () => {
  const { loading, error, data } = useQuery(MY_REQUESTS);

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  const columns = [
    { id: "id", label: "Request ID", minWidth: 170 },
    { id: "image", label: "Docker Image", minWidth: 170 },
    { id: "statusChip", label: "Status", minWidth: 100 },
    { id: "createdAt", label: "Created At", minWidth: 170 },
  ];

  const rows = createData(data.myRequests);

  return <CustomTable rows={rows} columns={columns} />;
};

export default MyRequestsList;