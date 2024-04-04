import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Poppins, sans-serif",
    },
  },
};

const colors = {
  brand: {
    primary: "#005DCB",
    bg: "#E6EEFF",
    font: "#002F66",
    hover: "#4387DA",
    orange: "#ff6d1c",
  },
};

const theme = extendTheme({ config, styles, colors });

export default theme;
