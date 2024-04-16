import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import theme from "@styles/theme";
import FiltersProvider from "./contexts/FiltersContext";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <FiltersProvider>{children}</FiltersProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
