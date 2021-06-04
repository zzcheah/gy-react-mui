import { useQuery } from "@apollo/client";
import {
  Chip,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DrawerLayout from "../components/layout/DrawerLayout";
import CustomTable from "../components/util/CustomTable";
import { GET_ALL_USERS } from "../graphql/query";

function createData(users, history) {
  var arr = [];
  users.forEach((item) => {
    const { id, name, role, status, email, phone } = item;
    const statusChip = (
      <Chip
        label={status}
        // @ts-ignore
        color={status === "Active" ? "success" : "default"}
      />
    );
    const action = () => {
      history.push(`/users/${id}`);
    };
    arr.push({ id, name, role, statusChip, email, phone, action });
  });
  return arr;
}

const UserTable = ({ history }) => {
  const { loading, data, error } = useQuery(GET_ALL_USERS);

  if (loading) return <CircularProgress />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const columns = [
    { id: "id", label: "User ID" },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "role", label: "Role", minWidth: 100 },
    { id: "statusChip", label: "Status", minWidth: 100, align: "center" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
  ];

  const rows = createData(data.allUsers, history);

  return <CustomTable rows={rows} columns={columns} />;
};

const UsersPage = () => {
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
          <b>Users</b>
        </Typography>
        <UserTable history={history} />
      </Container>
    </DrawerLayout>
  );
};

export default UsersPage;
