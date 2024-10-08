import "dayjs/locale/pt-br";
import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import FiltersProvider from "./contexts/FiltersContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NotificationProvider from "./contexts/NotificationContext";
import Notification from "./pages/Notification";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <NotificationProvider>
            <FiltersProvider>
              <Notification>{children}</Notification>
            </FiltersProvider>
          </NotificationProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
