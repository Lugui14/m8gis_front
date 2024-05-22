import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const BairrroInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      fullWidth
      id="bairro"
      label="Bairro"
      placeholder="Bairro"
      variant="outlined"
      error={!!errors?.bairro}
      helperText={errors?.bairro?.message}
      defaultValue={""}
      {...register("bairro")}
    />
  );
};

export default BairrroInput;
