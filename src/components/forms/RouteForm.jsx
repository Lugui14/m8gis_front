import { FiltersContext } from "@/contexts/FiltersContext";
import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import EstabelecimentoAutocomplete from "../inputs/autocomplete/EstabelecimentoAutocomplete";

const RouteForm = ({ onClose }) => {
  const { handleRoute } = useContext(FiltersContext);
  const form = useForm({
    defaultValues: {
      start: null,
      end: null,
    },
  });

  const onSubmit = data => {
    handleRoute(data.start, data.end);
    onClose();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EstabelecimentoAutocomplete
              type={"start"}
              control={form.control}
            />
          </Grid>
          <Grid item xs={12}>
            <EstabelecimentoAutocomplete type={"end"} control={form.control} />
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
            <Button variant={"contained"} type="submit">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default RouteForm;

RouteForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
