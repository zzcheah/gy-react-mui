import { useQuery } from "@apollo/client";
import { Box, Typography } from "@material-ui/core";
import { GET_ALL_USERS } from "../../graphql/query";
import CustomCard from "../util/CustomCard";

export default function TotalUsers() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <CustomCard>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Total Users
          </Typography>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Typography variant="h3" gutterBottom>
              <b>{data.allUsers.length}</b>
            </Typography>
          )}
        </div>
        <div style={{ flexBasis: "40%", paddingTop: "8px" }}>
          <img src="images/total_users.svg" alt="UserCount" width="100%"></img>
        </div>
      </Box>
    </CustomCard>
  );
}
