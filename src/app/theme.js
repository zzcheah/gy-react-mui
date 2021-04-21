import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  shape: {
    borderRadius: 16,
  },
  palette: {
    success: {
      main: "rgb(0, 171, 85)",
    },
    // warning: {
    //   main: "#FF8800",
    // },
    // error: {
    //   main: "#CC0000",
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          // color: "white",
          fontWeight: "bolder",
          fontSize: "12px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          boxShadow: "none",
          backdropFilter: "blur(6px)",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          // margin: "0",
          // padding: "0",
        },
      },
    },
  },
});

export default theme;
