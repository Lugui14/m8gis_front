import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const RadiusInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      fullWidth
      id="radius"
      label="Raio"
      placeholder="Raio"
      variant="outlined"
      error={!!errors?.radius}
      helperText={errors?.radius?.message}
      defaultValue={500}
      InputProps={{
        endAdornment: <InputAdornment position="end">metros</InputAdornment>,
      }}
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
      }}
      {...register("radius", { max: 100000, min: 0 })}
    />
  );
};

export default RadiusInput;
