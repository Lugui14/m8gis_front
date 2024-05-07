import api from "./axios";

export const fetchEstabelecimentosByFilters = async (filters, page) => {
  const { data } = await api.post(
    `/estabelecimento/estabelecimentos?page=${page}`,
    filters
  );

  return data;
};

export const fetchEstab_by_id = async id => {
  const { data } = await api.get(`/estabelecimento/${id}`);

  return data;
};
