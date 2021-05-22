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
  const sorted = images.slice().sort((a, b) => b.usageCount - a.usageCount);
  console.log(sorted);

  return (
    <List dense>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar variant="rounded" src="images/top1.svg" alt="Top1" />
        </ListItemAvatar>
        <ListItemText
          primary={<b>{sorted[0].name}</b>}
          secondary={"❤️ ".concat(sorted[0].usageCount)}
        />
      </ListItem>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar variant="rounded" src="images/top2.svg" alt="Top2" />
        </ListItemAvatar>
        <ListItemText
          primary={<b>{sorted[1].name}</b>}
          secondary={"❤️ ".concat(sorted[1].usageCount)}
        />
      </ListItem>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar variant="rounded" src="images/top3.svg" alt="Top3" />
        </ListItemAvatar>
        <ListItemText
          primary={<b>{sorted[2].name}</b>}
          secondary={"❤️ ".concat(sorted[2].usageCount)}
        />
      </ListItem>
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
        {loading ? "Loading" : <Ranking images={data.dockerImages} />}
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
