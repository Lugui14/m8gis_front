import { node } from "prop-types";
import { NotificationContext } from "@/contexts/NotificationContext";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useContext } from "react";

const Notification = ({ children }) => {
  const { error, handleCloseError, isLoading } =
    useContext(NotificationContext);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!error}
        autoHideDuration={6000}
        message={error}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>

      <Backdrop sx={{ color: "#fff", zIndex: 9999 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </>
  );
};

export default Notification;

Notification.propTypes = {
  children: node.isRequired,
};
