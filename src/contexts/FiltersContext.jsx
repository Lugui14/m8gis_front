import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchEstabelecimentosByFilters } from "@/api/estabApi";

export const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [total, setTotal] = useState(0);

  const [filters, setFilters] = useState({
    cnae: [],
    porte: null,
    situacao: 2,
    tipo: null,
    natJu: [],
    capitalSocial: 0,
    opcaoSimples: "",
    fromDate: null,
    toDate: null,
    cidade: null,
    bairro: "",
    logradouro: "",
    page: 0,
  });

  const changePage = page => {
    setFilters({ ...filters, page });
  };

  const homePageCnaeFilter = cnae => {
    setFilters({ ...filters, cnae: cnae });
  };

  const updateFilters = newFilters => {
    setFilters({ ...newFilters, page: 0 });
  };

  const formatFilters = filters => {
    const newFilters = {
      ...filters,
      cnae: filters.cnae.map(cnae => cnae.id),
      natJu: filters.natJu.map(natJu => natJu.id),
      cidade: filters.cidade ? filters.cidade.id : null,
    };

    return newFilters;
  };

  useEffect(() => {
    const formatedFilters = formatFilters(filters);
    fetchEstabelecimentosByFilters(formatedFilters, formatedFilters.page).then(
      data => {
        setEstabelecimentos(data.estabelecimentos);
        setTotal(data.total);
      }
    );
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        updateFilters,
        homePageCnaeFilter,
        estabelecimentos,
        changePage,
        total,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export default FiltersProvider;
