import api from "./axios";

export const fetchEstab_by_id = async (id) => {
    const { data } = await api.get(`/estabelecimento/${id}`);

  return data;
};