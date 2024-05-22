import api from "./axios";

export const fetchAllMunicpios = async () => {
  const { data } = await api.get("endereco/municipios");
  return data;
}