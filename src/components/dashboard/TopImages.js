import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { GET_DOCKER_IMAGES } from "../../graphql/query";
import CustomCard from "../util/CustomCard";

const Ranking = (props) => {
  const { images } = props;
  const sorted = images
    .slice()
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, 3);

  return (
    <List dense>
      {sorted.map((image, index) => (
        <ListItem key={index} disableGutters>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              src={`images/top${index + 1}.svg`}
              alt={`Top${index + 1}`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<b>{sorted[index].name}</b>}
            secondary={"❤️ ".concat(sorted[index].usageCount)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default function TopImages() {
  const { loading, error, data } = useQuery(GET_DOCKER_IMAGES);

  return (
    <CustomCard>
      <Typography variant="h5" gutterBottom>
        Top Images
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {loading ? <div>Loading...</div> : null}
        {error ? `Error! ${error.message}` : null}
        {data ? <Ranking images={data.dockerImages} /> : null}
        <div style={{ flexBasis: "40%", paddingLeft: "5px" }}>
          <img
            src="images/top_images.svg"
            alt="RequestCount"
            width="100%"
          ></img>
        </div>
      </Box>
    </CustomCard>
  );
}
