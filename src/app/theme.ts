import { createTheme } from "@mui/material/styles";

export const colors = {
  shark: "#282c34",
  razzmatazz: "#d40754",
  white: "#fff",
  silver: "#ccc",
  wildSand: "#f5f5f5",
  emperor: "#555",
  black: "#000",
  summerGreen: "#92c098",
  alto: "#d3d3d3",
};

const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },

        body: {
          color: colors.white,
          backgroundColor: colors.shark,
          overflowX: "hidden",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        },

        "::-webkit-scrollbar": {
          width: 8,

          "&-track": {
            backgroundColor: colors.wildSand,
          },

          "&-thumb": {
            backgroundColor: colors.emperor,
          },
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#d40754",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});

export default darkTheme;
