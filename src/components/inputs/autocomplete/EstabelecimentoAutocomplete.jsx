import { FiltersContext } from "@/contexts/FiltersContext";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Controller } from "react-hook-form";

const EstabelecimentoAutocomplete = ({ sx, control, type, ...props }) => {
  const { estabelecimentos } = useContext(FiltersContext);

  return (
    <Controller
      name={type}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;

        return (
          <Autocomplete
            {...props}
            sx={{ backgroundColor: "white", stroke: 0, ...sx }}
            options={estabelecimentos.filter(estab => estab.latitude)}
            value={value}
            onChange={(e, newValue) => {
              onChange(newValue);
            }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={option => option.razao_social}
            fullWidth
            renderInput={params => (
              <TextField
                {...params}
                sx={sx}
                label={
                  type === "start"
                    ? "Estabelecimento de origem"
                    : "Estabelecimento de destino"
                }
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

export default EstabelecimentoAutocomplete;

EstabelecimentoAutocomplete.propTypes = {
  control: PropTypes.any,
  sx: PropTypes.object,
  type: PropTypes.string,
};
