import { FormControl, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

const FromDatePicker = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name={"fromDate"}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <DatePicker
            label={"De"}
            control={control}
            inputFormat="DD/MM/YYYY"
            value={value}
            defaultValue={null}
            onChange={event => {
              onChange(event);
            }}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FromDatePicker;
