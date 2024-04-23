import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const OpcaoSimplesSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth error={!!errors?.opcaoSimples}>
      <InputLabel id="opcaoSimples-label">Opção pelo Simples</InputLabel>
      <Select
        fullWidth
        placeholder="Opção pelo Simples"
        labelId="opcaoSimples-label"
        label="Opção pelo Simples"
        defaultValue={""}
        error={!!errors?.opcaoSimples}
        {...register("opcaoSimples")}
      >
        <MenuItem value={"sim"}>Sim</MenuItem>
        <MenuItem value={"nao"}>Não</MenuItem>
        <MenuItem value={"outros"}>Outros</MenuItem>
      </Select>
      <FormHelperText>{errors?.opcaoSimples?.message}</FormHelperText>
    </FormControl>
  );
};

export default OpcaoSimplesSelect;
