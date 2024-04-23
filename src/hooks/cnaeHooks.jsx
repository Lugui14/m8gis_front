import { useQuery } from "@tanstack/react-query";
import { fetchAllCnaes, fetchAllEmpresas } from "../api/cnaeApi";

export const useFetchAllCnaes = () => {
  const response = useQuery({
    queryKey: ["cnaes"],
    queryFn: fetchAllCnaes,
  });

  return response;
};

export const useFetchAllEmpresas = () => {
  const response = useQuery({
    queryKey: ["empresas"],
    queryFn: fetchAllEmpresas,
  });
  return response;
};
