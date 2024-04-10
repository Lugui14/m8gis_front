import { useQuery } from "@tanstack/react-query";
import { fetchAllCnaes } from "../api/cnaeApi";

export const useFetchAllCnaes = () => {
  const response = useQuery({
    queryKey: ["cnaes"],
    queryFn: fetchAllCnaes,
  });

  return response;
};
