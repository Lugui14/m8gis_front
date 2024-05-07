import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const SituacaoSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth error={!!errors?.situacao}>
      <InputLabel id="situacao-label">Situação</InputLabel>
      <Select
        fullWidth
        placeholder="Situação"
        labelId="situacao-label"
        label="Situação"
        defaultValue={2}
        {...register("situacao")}
        error={!!errors?.situacao}
      >
        <MenuItem value={2}>Ativa</MenuItem>
        <MenuItem value={3}>Suspensa</MenuItem>
        <MenuItem value={4}>Inapta</MenuItem>
        <MenuItem value={5}>Baixada</MenuItem>
      </Select>
      <FormHelperText>{errors?.situacao?.message}</FormHelperText>
    </FormControl>
  );
};

export default SituacaoSelect;
