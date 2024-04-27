import { useQuery } from "@tanstack/react-query";
import { fetchEstab_by_id } from "@/api/estabApi";

export const useFetchEstabs = (id) => {
  const response = useQuery({
    queryKey: ["estabelecimento", id],  // Adicionando o ID para a chave de cache
    queryFn: () => fetchEstab_by_id(id),  // Passando o ID para a função de fetch
  });

  return response;
};
