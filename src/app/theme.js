import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  shape: {
    borderRadius: 16,
  },
  palette: {
    success: {
      main: "rgb(0, 171, 85)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
