import { useQuery } from "@apollo/client";
import { Chip, Container, Divider, Grid, Typography } from "@material-ui/core";
import DrawerLayout from "../../components/layout/DrawerLayout";
import CustomCard from "../../components/util/CustomCard";
import { GET_ALL_USERS } from "../../graphql/query";

const UserDetail = (props) => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <DrawerLayout>
      <Container sx={{ mb: 6 }}>
        {loading && !error ? (
          "loading..."
        ) : (
          <UserInfo users={data.allUsers} id={id} />
        )}
        {error ? `Error! ${error.message}` : null}
      </Container>
    </DrawerLayout>
  );
};

const UserInfo = (props) => {
  const { users, id } = props;
  const user = users.find((user) => user.id === id);
  if (user == null) return <div>User not found!!</div>;
  const { name, role, status, email, phone } = user;

  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ mb: 4, pl: 2 }}>
        <b>User Detail</b>
      </Typography>
      <CustomCard>
        <Typography variant="h6">User ID:</Typography>
        <Typography variant="body1">{id}</Typography>

        <CustomDivider />
        <Typography variant="h6">Name:</Typography>
        <Typography variant="body1">{name}</Typography>

        <CustomDivider />
        <Typography variant="h6">Role:</Typography>
        <Typography variant="body1">{role}</Typography>

        <CustomDivider />
        <Typography variant="h6">Status:</Typography>
        <Chip
          label={status ? status : "Checking"}
          color={status === "Active" ? "success" : "default"}
        />

        <CustomDivider />
        <Typography variant="h6">Email:</Typography>
        <Typography variant="body1">{email}</Typography>

        {phone ? (
          <div>
            <CustomDivider />
            <Typography variant="h6">Phone:</Typography>
            <Typography variant="body1">{phone}</Typography>
          </div>
        ) : null}
      </CustomCard>
    </div>
  );
};

const CustomDivider = () => {
  return <Divider sx={{ mt: 3, mb: 2 }} />;
};

export default UserDetail;
