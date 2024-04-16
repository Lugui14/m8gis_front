import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    cnae: null,
  });

  const updateFilters = newFilters => {
    setFilters(newFilters);
    console.log(filters);
  };

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export default FiltersProvider;
