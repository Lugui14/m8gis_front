import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const CapitalSocialSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth error={!!errors?.capitalSocial}>
      <InputLabel id="capitalSocial-label">Capital Social</InputLabel>
      <Select
        fullWidth
        placeholder="Capital Social"
        labelId="capitalSocial-label"
        label="Capital Social"
        defaultValue={0}
        error={!!errors?.capitalSocial}
        {...register("capitalSocial")}
      >
        <MenuItem value={0}>Todos</MenuItem>
        <MenuItem value={1}>R$ 0 - R$ 50 mil</MenuItem>
        <MenuItem value={2}>R$ 50 mil - R$ 100 mil</MenuItem>
        <MenuItem value={3}>R$ 100 mil - R$ 1 milhão</MenuItem>
        <MenuItem value={4}>Acima de R$ 1 milhão</MenuItem>
      </Select>
      <FormHelperText>{errors?.capitalSocial?.message}</FormHelperText>
    </FormControl>
  );
};

export default CapitalSocialSelect;
