import { useFetchAllCnaes } from "@hooks/cnaeHooks";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const CnaeAutocomplete = ({ sx, ...props }) => {
  const { data: cnaes, isLoading } = useFetchAllCnaes();

  return (
    <Autocomplete
      multiple
      sx={{
        backgroundColor: "white",
        ...sx,
      }}
      options={
        !isLoading
          ? cnaes?.map(cnae => ({
              label: cnae.descricao,
              id: cnae.id,
            }))
          : []
      }
      fullWidth
      {...props}
      renderInput={params => <TextField {...params} label="Cnaes" />}
    />
  );
};

export default CnaeAutocomplete;

CnaeAutocomplete.propTypes = {
  sx: PropTypes.object,
};
