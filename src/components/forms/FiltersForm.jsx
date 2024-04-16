import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiltersContext } from "@contexts/FiltersContext";

const FiltersForm = () => {
  const { updateFilters } = useContext(FiltersContext);
  const { handleSubmit, register } = useForm();

  const onSubmit = data => {
    updateFilters(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="CNAE" {...register("cnae")} />
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
