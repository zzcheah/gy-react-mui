import { Typography, Box } from "@material-ui/core";
import React from "react";

const EmptyInbox = ({ title, offset }) => {
  console.log(offset);
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "5px" }}>{offset}</div>

        <div style={{ flexBasis: "40%", paddingLeft: "5px" }}>
          <img
            src="/images/empty_inbox.svg"
            alt="Empty Requests"
            width="100%"
          ></img>
        </div>
      </Box>
    </div>
  );
};

export default EmptyInbox;
