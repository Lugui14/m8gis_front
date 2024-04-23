import { useQuery } from "@tanstack/react-query";
import { fetchAllNatJu } from "@/api/natJuApi";

export const useFetchAllNatJu = () => {
  const response = useQuery({
    queryKey: ["natJu"],
    queryFn: fetchAllNatJu,
  });

  return response;
};
