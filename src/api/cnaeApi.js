import api from "./axios";

export const fetchAllCnaes = async () => {
  const { data } = await api.get("/cnae");
  return data;
};
export const fetchAllEmpresas = async () => {
  const { data } = await api.get("/empresa");
  return data;
};
