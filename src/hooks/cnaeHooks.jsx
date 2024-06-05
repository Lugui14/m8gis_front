import { useQuery } from "@tanstack/react-query";
import { fetchAllCnaes, fetchAllEmpresas } from "../api/cnaeApi";
import { useContext, useEffect } from "react";
import { NotificationContext } from "@/contexts/NotificationContext";

export const useFetchAllCnaes = () => {
  const { handleError, handleLoading } = useContext(NotificationContext);
  const response = useQuery({
    queryKey: ["cnaes"],
    queryFn: fetchAllCnaes,
  });

  useEffect(() => {
    if (response.isError) {
      handleError(response.error.message);
    }

    handleLoading(response.isLoading);
  }, [response.isLoading, response.isError, response.error]); // eslint-disable-line

  return response;
};

export const useFetchAllEmpresas = () => {
  const { handleError, handleLoading } = useContext(NotificationContext);
  const response = useQuery({
    queryKey: ["empresas"],
    queryFn: fetchAllEmpresas,
  });

  useEffect(() => {
    if (response.isError) {
      handleError(response.error.message);
    }

    handleLoading(response.isLoading);
  }, [response.isLoading, response.isError, response.error]); // eslint-disable-line

  return response;
};
