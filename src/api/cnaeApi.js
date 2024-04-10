import api from "./axios";

export const fetchAllCnaes = async () => {
  const { data } = await api.get("/cnae");
  return data;
};
