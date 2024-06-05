import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleError = error => {
    setError(error);

    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const handleCloseError = () => {
    setError("");
  };

  const handleLoading = loading => {
    setIsLoading(loading);
  };

  return (
    <NotificationContext.Provider
      value={{ handleError, handleCloseError, error, handleLoading, isLoading }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

NotificationProvider.propTypes = {
  children: PropTypes.node,
};
