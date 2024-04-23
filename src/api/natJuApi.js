import api from "./axios";

export const fetchAllNatJu = async () => {
  const { data } = await api.get("/natju");
  return data;
};
