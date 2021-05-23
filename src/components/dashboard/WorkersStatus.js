import { useQuery } from "@apollo/client";
import {
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { LIST_WORKERS } from "../../graphql/query";
import CustomCard from "../util/CustomCard";

const styles = {
  list: {
    width: "100%",
    maxHeight: "200px",
    overflow: "auto",
    ml: -1,
    mr: 1,
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      //   margin: "0 -5px",
      //   padding: "0 5px",
    },
  },
};

export default function WorkersStatus() {
  const { loading, error, data } = useQuery(LIST_WORKERS);

  return (
    <CustomCard>
      <Typography variant="h5" gutterBottom>
        Workers Status
      </Typography>
      {loading && !error ? (
        <div>Loading...</div>
      ) : (
        <WorkerList workers={data.workerList} />
      )}
      {error ? `Error! ${error.message}` : null}
    </CustomCard>
  );
}

const WorkerList = ({ workers }) => {
  const history = useHistory();

  return (
    <List sx={styles.list}>
      {workers.map((worker) => (
        <ListItem
          key={worker.id}
          button
          onClick={() => {
            history.push("/workers/" + worker.id);
          }}
        >
          <Typography>{worker.name}</Typography>
          <Chip
            label={worker.status ? worker.status : "Checking"}
            color={worker.status === "Active" ? "success" : "default"}
            style={{
              minWidth: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};
