import { useQuery } from "@apollo/client";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { WORKER_APPLICATIONS } from "../../graphql/query";
import CustomCard from "../util/CustomCard";
import EmptyInbox from "../util/EmptyInbox";

const WorkerApplication = () => {
  const { loading, error, data } = useQuery(WORKER_APPLICATIONS);

  return (
    <CustomCard>
      {loading ? <div>Loading...</div> : null}
      {error ? `Error! ${error.message}` : null}
      <DataRender data={data} />
    </CustomCard>
  );
};

const DataRender = ({ data }) => {
  if (!data) return null;
  if (data.workerApplications.length > 0) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flexBasis: "40%",
            paddingTop: "8px",
            flexShrink: 2,
          }}
        >
          <img
            src="images/worker_application.svg"
            alt="RequestCount"
            width="100%"
          ></img>
        </div>
        <div style={{ flexGrow: 2, paddingLeft: "12px" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" gutterBottom>
              New Worker Applications
            </Typography>
            <div>
              <Box sx={{ p: 1 }}>
                <Typography component="span">count: </Typography>
                <Typography variant="h3" gutterBottom component="span">
                  <b>{data.workerApplications.length}</b>
                </Typography>
                <br />
              </Box>
              <Divider />
              <Box sx={{ pt: 1 }}>
                <Button
                  component={Link}
                  to="/newWorker"
                  sx={{ float: "right" }}
                >
                  View All
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    );
  } else {
    const offset = (
      <div style={{ padding: "5px" }}>
        <Typography>All Checked ✔️✔️</Typography>
        <Typography>No new applications 🙂🙂</Typography>
      </div>
    );
    return <EmptyInbox title={"New Worker Applications"} offset={offset} />;
  }
};

export default WorkerApplication;
