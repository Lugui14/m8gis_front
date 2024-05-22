import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const LogradouroInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      fullWidth
      id="logradouro"
      label="Logradouro"
      placeholder="Logradouro"
      variant="outlined"
      error={!!errors?.logradouro}
      helperText={errors?.logradouro?.message}
      defaultValue={""}
      {...register("logradouro")}
    />
  );
};

export default LogradouroInput;
