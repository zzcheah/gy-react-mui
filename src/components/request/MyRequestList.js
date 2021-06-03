import { useQuery } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import { MY_REQUESTS } from "../../graphql/query";
import CustomTable from "../util/CustomTable";
import { STATUS_CHIPS } from "../util/StatusChips";

function createData(requests, history) {
  var arr = [];
  requests.forEach((item) => {
    const { id, name, status, createdAt, image, assignedTo } = item;
    const statusChip = STATUS_CHIPS[status]
      ? STATUS_CHIPS[status]
      : STATUS_CHIPS["DEFAULT"];
    const action = () => {
      history.push(`/requests/${id}`);
    };
    arr.push({
      name,
      statusChip,
      createdAt,
      image,
      assignedTo,
      action,
    });
  });
  return arr;
}

const MyRequestsList = () => {
  const { loading, error, data } = useQuery(MY_REQUESTS);
  const history = useHistory();

  if (loading) return <CircularProgress />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "statusChip", label: "Status" },
    { id: "image", label: "Docker Image" },
    { id: "createdAt", label: "Created At" },
  ];

  const rows = createData(data.myRequests, history);

  return <CustomTable rows={rows} columns={columns} />;
};

export default MyRequestsList;
