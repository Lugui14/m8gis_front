import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiltersContext } from "../../contexts/FiltersContext";
import SelectInput from "@mui/material/Select/SelectInput";
import { useFetchAllCnaes, useFetchAllEmpresas } from "../../hooks/cnaeHooks";

const FiltersForm = () => {
  const { updateFilters } = useContext(FiltersContext);
  const { handleSubmit, register } = useForm();
  const [cnae, setCnae] = useState("");
  // const [empresa, setEmpresa] = React.useState("");
  const { data: cnaes } = useFetchAllCnaes();
  const { data: empresas } = useFetchAllEmpresas();
  const uniquePortes = new Set(empresas?.map(empresa => empresa.porte));

  const [selectedPorte, setSelectedPorte] = useState("");

  const handleChange = event => {
    setCnae(event.target.value);
    register(cnae);
  };
  const handleChangePorte = event => {
    setSelectedPorte(event.target.value);
    register(selectedPorte);
  };
  const onSubmit = data => {
    updateFilters(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="CNAE" {...register("cnae")} />
        </Grid>
        <Grid item xs={30} sm={2}>
          <Select
            labelId="simple-select-cnae"
            id="simple-select-cnae"
            value={cnae}
            label="Cnae"
            onChange={handleChange}
          >
            {cnaes?.map(cnae => (
              <MenuItem key={cnae.id} value={cnae.id}>
                {cnae.descricao}
              </MenuItem>
            ))}
          </Select>
          <Select
            labelId="simple-select-empresa"
            id="simple-select-empresa"
            value={selectedPorte}
            label="Empresa"
            onChange={handleChangePorte}
          >
            {[...uniquePortes].map(porte => (
              <MenuItem key={porte} value={porte}>
                {porte}
              </MenuItem>
            ))}
          </Select>
          {console.log(empresas)}
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
          <Button variant={"contained"} type="submit">
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FiltersForm;
