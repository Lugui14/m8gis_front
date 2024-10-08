import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiltersContext } from "../../contexts/FiltersContext";

import CnaeAutocomplete from "@components/inputs/autocomplete/CnaeAutocomplete";
import PorteSelect from "@components/inputs/selects/PorteSelect";
import NatJuAutocomplete from "../inputs/autocomplete/NatJuAutocomplete";
import SituacaoSelect from "../inputs/selects/SituacaoSelect";
import TipoSelect from "../inputs/selects/TipoSelect";
import CapitalSocialSelect from "../inputs/selects/CapitalSocialSelect";
import OpcaoSimplesSelect from "../inputs/selects/OpcaoSimplesSelect";
import FromDatePicker from "../inputs/date/openingDate/FromDatePicker";
import ToDatePicker from "../inputs/date/openingDate/ToDatePicker";
import MunicipioAutocomplete from "../inputs/autocomplete/MunicipioAutocomplete";
import LogradouroInput from "../inputs/fields/LogradouroInput";
import BairrroInput from "../inputs/fields/BairroInput";
import { useNavigate } from "react-router-dom";


const FiltersForm = () => {
  const { updateFilters } = useContext(FiltersContext);
  const form = useForm({
    defaultValues: {
      cnae: [],
      porte: null,
      situacao: 2,
      tipo: null,
      natJu: [],
      capitalSocial: 0,
      opcaoSimples: "",
      cidade: null,
      bairro: "",
      logradouro: "",
      fromDate: null,
      toDate: null,
    },
  });
  
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    updateFilters(data);
    navigate("/map");
    
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CnaeAutocomplete control={form.control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PorteSelect />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SituacaoSelect />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TipoSelect />
          </Grid>
          <Grid item xs={12}>
            <NatJuAutocomplete control={form.control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CapitalSocialSelect />
          </Grid>
          <Grid item xs={12} sm={6}>
            <OpcaoSimplesSelect />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MunicipioAutocomplete control={form.control} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <LogradouroInput />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BairrroInput />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">Data de Abertura</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FromDatePicker />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ToDatePicker />
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
            <Button variant={"contained"} type="submit">
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default FiltersForm;
