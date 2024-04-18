import { useFetchAllCnaes } from "@hooks/cnaeHooks";
import { Autocomplete, TextField } from "@mui/material";

const CnaeAutocomplete = props => {
  const { data: cnaes, isLoading } = useFetchAllCnaes();

  return (
    <Autocomplete
      multiple
      sx={{
        width: "90%",
        maxWidth: "90%",
        backgroundColor: "white",
      }}
      options={
        !isLoading
          ? cnaes?.map(cnae => ({
              label: cnae.descricao,
              id: cnae.id,
            }))
          : []
      }
      {...props}
      renderInput={params => <TextField {...params} label="Cnaes" />}
    />
  );
};

export default CnaeAutocomplete;
