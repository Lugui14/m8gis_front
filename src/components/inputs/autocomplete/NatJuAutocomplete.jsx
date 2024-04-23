import { useFetchAllNatJu } from "@hooks/natJuHooks";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const NatJuAutocomplete = ({ control, ...props }) => {
  const { data: natJus, isLoading } = useFetchAllNatJu();

  return (
    <Controller
      name="natJu"
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;

        return (
          <Autocomplete
            {...props}
            multiple
            sx={{ backgroundColor: "white" }}
            options={!isLoading ? natJus : []}
            loading={isLoading}
            value={value}
            onChange={(e, newValue) => {
              onChange(newValue);
            }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            fullWidth
            getOptionLabel={option => `${option.id} - ${option.descricao}`}
            renderInput={params => (
              <TextField
                {...params}
                label="Natureza Jurídica"
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

export default NatJuAutocomplete;

NatJuAutocomplete.propTypes = {
  control: PropTypes.any,
};
