import { useFetchAllEmpresas } from "@hooks/cnaeHooks";
import { MenuItem, Select } from "@mui/material";

const NatJuridicaSelect = props => {
  const { data: empresas } = useFetchAllEmpresas();
  const uniquePortes = new Set(empresas?.map(empresa => empresa.porte));

  return (
    <Select fullWidth placeholder="Porte da empresa" {...props}>
      {[...uniquePortes].map(porte => (
        <MenuItem key={porte} value={porte}>
          {porte}
        </MenuItem>
      ))}
    </Select>
  );
};

export default NatJuridicaSelect;
