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
        defaultValue={"ativa"}
        {...register("situacao")}
        error={!!errors?.situacao}
      >
        <MenuItem value={"ativa"}>Ativa</MenuItem>
        <MenuItem value={"suspensa"}>Suspensa</MenuItem>
        <MenuItem value={"inapta"}>Inapta</MenuItem>
        <MenuItem value={"baixada"}>Baixada</MenuItem>
      </Select>
      <FormHelperText>{errors?.situacao?.message}</FormHelperText>
    </FormControl>
  );
};

export default SituacaoSelect;
