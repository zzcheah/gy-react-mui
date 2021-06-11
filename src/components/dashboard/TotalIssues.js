import { Box, Typography } from "@material-ui/core";
import CustomCard from "../util/CustomCard";

export default function TotalIssues() {
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
            Total Issues
          </Typography>
          <Typography variant="h3" gutterBottom>
            <b>1</b>
          </Typography>
        </div>
        <div style={{ flexBasis: "40%", paddingTop: "8px" }}>
          <img
            src="images/total_issues.svg"
            alt="IssueCount"
            width="100%"
          ></img>
        </div>
      </Box>
    </CustomCard>
  );
}
