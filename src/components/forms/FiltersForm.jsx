import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiltersContext } from "../../contexts/FiltersContext";

import CnaeAutocomplete from "@components/inputs/autocomplete/CnaeAutocomplete";
import NatJuridicaSelect from "@components/inputs/selects/NatJuridicaSelect";

const FiltersForm = () => {
  const { updateFilters } = useContext(FiltersContext);
  const { handleSubmit } = useForm();

  const onSubmit = data => {
    updateFilters(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CnaeAutocomplete />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NatJuridicaSelect />
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
