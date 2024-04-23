import { FormControl, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

const ToDatePicker = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name={"toDate"}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <DatePicker
            label={"Até"}
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

export default ToDatePicker;
