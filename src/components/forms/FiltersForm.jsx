import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiltersContext } from "../../contexts/FiltersContext";

import CnaeAutocomplete from "@components/inputs/autocomplete/CnaeAutocomplete";
import PorteSelect from "@components/inputs/selects/PorteSelect";

const FiltersForm = () => {
  const { updateFilters } = useContext(FiltersContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    updateFilters(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CnaeAutocomplete
            {...register("cnae")}
            error={errors.cnae && errors.cnae?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PorteSelect
            {...register("porte")}
            error={errors.porte && errors.porte?.message}
          />
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
