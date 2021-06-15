import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      GPU Yard {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(2, 2),
      marginTop: "auto",
      backgroundColor: "rgba(255, 255, 255, 0.72)",
    },
  })
);

const sizing = {
  height: 30,
  width: 30,
};

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Copyright />
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ pr: 1 }}>
            Prepared by: <strong>Cheah Zhong Zhi</strong>
          </Typography>
          <Box sx={{ pl: 1 }}>
            <SocialIcon
              style={sizing}
              network="linkedin"
              url="https://linkedin.com/in/zzcheah"
            />
          </Box>
          <Box sx={{ pl: 1 }}>
            <SocialIcon
              style={sizing}
              network="github"
              url="https://github.com/zzcheah"
            />
          </Box>
          <Box sx={{ pl: 1 }}>
            <SocialIcon
              style={sizing}
              network="mailto"
              url="mailto:zzcheah@live.com"
            />
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
