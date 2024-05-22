import { fetchAllMunicpios } from "@/api/addressApi";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllMunicipios = () => {
  const response = useQuery({
    queryKey: ["municipios"],
    queryFn: fetchAllMunicpios,
  });

  return response;
};
