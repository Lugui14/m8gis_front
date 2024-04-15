import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff6d1c",
    },
    blue: {
      main: "#005DCB",
      light: "#4387DA",
    },
    background: {
      default: "#E6EEFF",
    },
    text: {
      primary: "#002F66",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
