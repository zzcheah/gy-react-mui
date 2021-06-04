import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import { APPROVE_IMAGE } from "../../graphql/mutation";
import { IMAGE_REQUESTS } from "../../graphql/query";
import DrawerLayout from "../layout/DrawerLayout";
import CustomTable from "../util/CustomTable";

function createData(requests, approveImage) {
  var arr = [];
  requests.forEach((item) => {
    const { id, image, tag, remark, createdAt } = item;
    const button = (
      <Button
        variant="contained"
        onClick={() => {
          approveImage({
            variables: { input: id },
            update(cache) {
              cache.modify({
                fields: {
                  imageRequests(existingIRRefs, { readField }) {
                    return existingIRRefs.filter(
                      (irRef) => id !== readField("id", irRef)
                    );
                  },
                },
              });
            },
          });
        }}
      >
        Approve
      </Button>
    );
    arr.push({ id, image, tag, remark, createdAt, button });
  });
  return arr;
}

const ImageRequestsPage = () => {
  return (
    <DrawerLayout>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ pb: 2, pl: 2 }}
        >
          <b>Image Requests</b>
        </Typography>
        <IRTable />
      </Container>
    </DrawerLayout>
  );
};

const IRTable = () => {
  const { loading, error, data } = useQuery(IMAGE_REQUESTS);
  const [approveImage] = useMutation(APPROVE_IMAGE);

  if (loading) return <CircularProgress />;
  if (error) return <div>`Error! ${error.message}`</div>;

  const columns = [
    { id: "id", label: "ID" },
    { id: "image", label: "Image", minWidth: 200 },
    { id: "tag", label: "Tag" },
    { id: "remark", label: "Remark" },
    { id: "createdAt", label: "Creation Time" },
    { id: "button", label: "" },
  ];

  const rows = createData(data.imageRequests, approveImage);

  return <CustomTable rows={rows} columns={columns} />;
};

export default ImageRequestsPage;
