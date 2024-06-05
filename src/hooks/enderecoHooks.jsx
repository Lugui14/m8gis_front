import { fetchAllMunicpios } from "@/api/addressApi";
import { NotificationContext } from "@/contexts/NotificationContext";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";

export const useFetchAllMunicipios = () => {
  const { handleError, handleLoading } = useContext(NotificationContext);

  const response = useQuery({
    queryKey: ["municipios"],
    queryFn: fetchAllMunicpios,
  });

  useEffect(() => {
    if (response.isError) {
      handleError(response.error.message);
    }

    handleLoading(response.isLoading);
  }, [response.isLoading, response.isError, response.error]); // eslint-disable-line

  return response;
};
