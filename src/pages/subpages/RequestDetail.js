import { useQuery } from "@apollo/client";
import { Box, Button, Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import { BACKEND_HOST } from "../../app/constants";
import DrawerLayout from "../../components/layout/DrawerLayout";
import CustomCard from "../../components/util/CustomCard";
import { STATUS_CHIPS } from "../../components/util/StatusChips";
import { MY_REQUESTS } from "../../graphql/query";

const RequestDetail = (props) => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(MY_REQUESTS);

  return (
    <DrawerLayout>
      <Container sx={{ mb: 6 }}>
        {loading && !error ? (
          "loading..."
        ) : (
          <RequestInfo requests={data.myRequests} id={id} />
        )}
        {error ? `Error! ${error.message}` : null}
      </Container>
    </DrawerLayout>
  );
};

const RequestInfo = (props) => {
  const { requests, id } = props;
  const request = requests.find((request) => request.id === id);
  if (request == null) return <div>Request not found!!</div>;
  const {
    name,
    status,
    createdAt,
    image,
    encodedParam,
    // inputFiles,
    outputFiles,
    assignedTo,
    remark,
  } = request;

  console.log(atob(encodedParam));

  const decoded = JSON.stringify(JSON.parse(atob(encodedParam)), null, 2);

  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ mb: 4, pl: 2 }}>
        <b>Request Detail</b>
      </Typography>
      <CustomCard>
        <Box sx={{ overflow: "clip" }}>
          <Typography variant="h6" gutterBottom>
            Request ID:
          </Typography>
          <Typography variant="body1">{id}</Typography>

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Name:
          </Typography>
          <Typography variant="body1">{name}</Typography>

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Image:
          </Typography>
          <Typography variant="body1">{image}</Typography>

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Status:
          </Typography>
          {STATUS_CHIPS[status]
            ? STATUS_CHIPS[status]
            : STATUS_CHIPS["DEFAULT"]}

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Assigned To:
          </Typography>
          <Typography variant="body1">{assignedTo}</Typography>

          {outputFiles && outputFiles.length === 1 ? (
            <div>
              <CustomDivider />
              <Typography variant="h6" gutterBottom>
                Output File:
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  window.open(
                    BACKEND_HOST + "files/" + outputFiles[0],
                    "_blank"
                  );
                }}
              >
                Download
              </Button>
            </div>
          ) : null}

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Creation Time:
          </Typography>
          <Typography variant="body1">{createdAt}</Typography>

          <CustomDivider />
          <Typography variant="h6" gutterBottom>
            Parameters:
          </Typography>
          <Typography variant="body1" component="pre">
            {decoded}
          </Typography>

          {remark ? (
            <div>
              <CustomDivider />
              <Typography variant="h6" gutterBottom>
                Remark:
              </Typography>
              <Typography variant="body1">{remark}</Typography>
            </div>
          ) : null}
        </Box>
      </CustomCard>
    </div>
  );
};

const CustomDivider = () => {
  return <Divider sx={{ mt: 3, mb: 2 }} />;
};

export default RequestDetail;
