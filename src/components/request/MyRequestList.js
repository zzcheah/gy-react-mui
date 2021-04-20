import { useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import { MY_REQUESTS } from "../../graphql/query";
import CustomTable from "../util/CustomTable";

function createData(requests) {
  var arr = [];
  requests.forEach((item) => {
    const { id, status, createdAt, title, image } = item;
    const button = <button>{status}</button>;
    arr.push({ id, status, createdAt, title, image, button });
  });
  return arr;
}

const MyRequestsList = () => {
  const { loading, error, data } = useQuery(MY_REQUESTS);

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  const columns = [
    { id: "id", label: "Request ID", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
    { id: "createdAt", label: "Created At", minWidth: 170 },
    { id: "title", label: "Title", minWidth: 170 },
    { id: "image", label: "Docker Image", minWidth: 170 },
    { id: "button", label: "Test Button", minWidth: 170 },
  ];

  const rows = createData(data.myRequests);

  return <CustomTable rows={rows} columns={columns} />;
};

export default MyRequestsList;
