import Header from "../../components/Header";
import { FaFilter } from "react-icons/fa";
import { useFetchAllCnaes } from "../../hooks/cnaeHooks";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Home = () => {
  const { data: cnaes } = useFetchAllCnaes();

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Header />
      <Grid container spacing={2}>
        <Grid className="hero" item xs={12}>
          <Grid sx={{ paddingX: 16 }} container>
            <Grid item xs={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "100%",
                  color: "text.primary",
                  gap: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: 48 }}>
                  Análise geográfica de empresas
                </Typography>
                <Typography sx={{ fontWeight: "light", fontSize: 24 }}>
                  A poucos passos de seus novos clientes
                </Typography>

                <Autocomplete
                  multiple
                  sx={{
                    width: "90%",
                    maxWidth: "90%",
                    backgroundColor: "white",
                  }}
                  options={
                    cnaes
                      ? cnaes?.map(cnae => ({
                          label: cnae.descricao,
                          id: cnae.id,
                        }))
                      : []
                  }
                  renderInput={params => (
                    <TextField {...params} label="Cnaes" />
                  )}
                />

                <Button
                  variant={"contained"}
                  sx={{
                    color: "white",
                    backgroundColor: "blue.primary",
                    marginTop: 2,
                    ":hover": { backgroundColor: "blue.light" },
                  }}
                  startIcon={<FaFilter />}
                >
                  Mais Filtros
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img src="assets/images/map.svg" alt="MAP SVG" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
