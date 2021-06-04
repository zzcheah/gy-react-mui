import { useQuery } from "@apollo/client";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IMAGE_REQUESTS } from "../../graphql/query";
import CustomCard from "../util/CustomCard";
import EmptyInbox from "../util/EmptyInbox";

const ImageRequests = () => {
  const { loading, error, data } = useQuery(IMAGE_REQUESTS);

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
  if (data.imageRequests.length > 0) {
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
            src="images/image_request.svg"
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
              Image Requests
            </Typography>
            <div>
              <Box sx={{ p: 1 }}>
                <Typography component="span">count: </Typography>
                <Typography variant="h3" gutterBottom component="span">
                  <b>{data.imageRequests.length}</b>
                </Typography>
                <br />
              </Box>
              <Divider />
              <Box sx={{ pt: 1 }}>
                <Button
                  component={Link}
                  to="/imageRequests"
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
        <Typography>No new image requests 🙂🙂</Typography>
      </div>
    );
    return <EmptyInbox title={"Docker Image Requests"} offset={offset} />;
  }
};

export default ImageRequests;
