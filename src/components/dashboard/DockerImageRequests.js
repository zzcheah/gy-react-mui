import { Box, Typography } from "@material-ui/core";
import CustomCard from "../util/CustomCard";

export default function DockerImageRequests() {
  return (
    <CustomCard>
      <Typography variant="h6" gutterBottom>
        Docker Image Request
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "5px" }}>
          <Typography>All Checked ✔️✔️</Typography>
          <Typography>No new request 🙂🙂</Typography>
        </div>

        <div style={{ flexBasis: "40%", paddingLeft: "5px" }}>
          <img
            src="/images/empty_inbox.svg"
            alt="Empty Requests"
            width="100%"
          ></img>
        </div>
      </Box>
    </CustomCard>
  );
}
