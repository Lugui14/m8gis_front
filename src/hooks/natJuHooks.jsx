import { useQuery } from "@tanstack/react-query";
import { fetchAllNatJu } from "@/api/natJuApi";
import { useContext, useEffect } from "react";
import { NotificationContext } from "@/contexts/NotificationContext";

export const useFetchAllNatJu = () => {
  const { handleError, handleLoading } = useContext(NotificationContext);

  const response = useQuery({
    queryKey: ["natJu"],
    queryFn: fetchAllNatJu,
  });

  useEffect(() => {
    if (response.isError) {
      handleError(response.error.message);
    }

    handleLoading(response.isLoading);
  }, [response.isLoading, response.isError, response.error]); // eslint-disable-line

  return response;
};
