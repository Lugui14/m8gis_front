import { useFetchAllMunicipios } from "@/hooks/enderecoHooks";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const MunicipioAutocomplete = ({ sx, control, ...props }) => {
  const { data: municipios, isLoading } = useFetchAllMunicipios();

  return (
    <Controller
      name="cidade"
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;

        return (
          <Autocomplete
            {...props}
            sx={{ backgroundColor: "white", ...sx }}
            options={!isLoading ? municipios : []}
            loading={isLoading}
            value={value}
            onChange={(e, newValue) => {
              onChange(newValue);
            }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            fullWidth
            getOptionLabel={option => option.descricao}
            renderInput={params => (
              <TextField
                {...params}
                label="Município"
                inputRef={ref}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        );
      }}
    />
  );
};

export default MunicipioAutocomplete;

MunicipioAutocomplete.propTypes = {
  control: PropTypes.any,
  sx: PropTypes.object,
};
