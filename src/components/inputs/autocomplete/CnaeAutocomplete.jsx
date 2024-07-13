import { useFetchAllCnaes } from "@hooks/cnaeHooks";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const CnaeAutocomplete = ({ sx, control, ...props }) => {
  const { data: cnaes, isLoading } = useFetchAllCnaes();

  return (
    <Controller
      name="cnae"
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;

        return (
          <Autocomplete
            {...props}
            multiple
            sx={{ backgroundColor: "white", stroke: 0, ...sx }}
            options={!isLoading ? cnaes : []}
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
                sx={sx}
                label="CNAE"
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

export default CnaeAutocomplete;

CnaeAutocomplete.propTypes = {
  control: PropTypes.any,
  sx: PropTypes.object,
};
