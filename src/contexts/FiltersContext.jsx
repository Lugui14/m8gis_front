import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchEstabelecimentosByFilters } from "@/api/estabApi";

export const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

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
    page: 0,
  });

  const homePageCnaeFilter = cnae => {
    setFilters({ ...filters, cnae: cnae });
  };

  const updateFilters = newFilters => {
    setFilters(newFilters);
  };

  const formatFilters = filters => {
    const newFilters = {
      ...filters,
      cnae: filters.cnae.map(cnae => cnae.id),
      natJu: filters.natJu.map(natJu => natJu.id),
    };

    return newFilters;
  };

  useEffect(() => {
    const formatedFilters = formatFilters(filters);
    fetchEstabelecimentosByFilters(formatedFilters, formatedFilters.page).then(
      data => {
        setEstabelecimentos(data);
      }
    );
  }, [filters]);

  return (
    <FiltersContext.Provider
      value={{ filters, updateFilters, homePageCnaeFilter, estabelecimentos }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export default FiltersProvider;
