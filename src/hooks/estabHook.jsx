import { useQuery } from "@tanstack/react-query";
import { fetchEstab_by_id } from "@/api/estabApi";
import { useContext, useEffect } from "react";
import { NotificationContext } from "@/contexts/NotificationContext";

export const useFetchEstabs = id => {
  const { handleError, handleLoading } = useContext(NotificationContext);

  const response = useQuery({
    queryKey: ["estabelecimento", id], // Adicionando o ID para a chave de cache
    queryFn: () => fetchEstab_by_id(id), // Passando o ID para a função de fetch
  });

  useEffect(() => {
    if (response.isError) {
      handleError(response.error.message);
    }

    handleLoading(response.isLoading);
  }, [response.isLoading, response.isError, response.error]); // eslint-disable-line

  return response;
};
