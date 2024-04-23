import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const PorteSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth error={!!errors?.porte}>
      <InputLabel id="porte-label">Porte</InputLabel>
      <Select
        fullWidth
        placeholder="Porte da empresa"
        labelId="porte-label"
        label="Porte"
        defaultValue={""}
        {...register("porte")}
        error={!!errors?.porte}
      >
        <MenuItem value={3}>Medio Porte</MenuItem>
        <MenuItem value={5}>Grande Porte</MenuItem>
        <MenuItem value={6}>Ambos</MenuItem>
      </Select>
      <FormHelperText>{errors?.porte?.message}</FormHelperText>
    </FormControl>
  );
};

export default PorteSelect;
