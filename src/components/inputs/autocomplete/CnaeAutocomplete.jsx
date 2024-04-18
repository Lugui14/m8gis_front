import { useFetchAllCnaes } from "@hooks/cnaeHooks";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const CnaeAutocomplete = ({ error, sx, ...props }) => {
  const { data: cnaes, isLoading } = useFetchAllCnaes();

  return (
    <Autocomplete
      {...props}
      multiple
      sx={{ backgroundColor: "white", ...sx }}
      options={!isLoading ? cnaes : []}
      loading={isLoading}
      fullWidth
      getOptionLabel={option => option.descricao}
      renderInput={params => (
        <TextField
          {...params}
          label="CNAE"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default CnaeAutocomplete;

CnaeAutocomplete.propTypes = {
  error: PropTypes.string,
  sx: PropTypes.object,
};
