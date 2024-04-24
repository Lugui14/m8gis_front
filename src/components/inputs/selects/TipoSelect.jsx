import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const TipoSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth error={!!errors?.tipo}>
      <InputLabel id="tipo-label">Tipo</InputLabel>
      <Select
        fullWidth
        placeholder="Tipo"
        labelId="tipo-label"
        label="Tipo"
        defaultValue={""}
        {...register("tipo")}
        error={!!errors?.tipo}
      >
        <MenuItem value={"matriz"}>Matriz</MenuItem>
        <MenuItem value={"filial"}>Filial</MenuItem>
      </Select>
      <FormHelperText>{errors?.tipo?.message}</FormHelperText>
    </FormControl>
  );
};

export default TipoSelect;
