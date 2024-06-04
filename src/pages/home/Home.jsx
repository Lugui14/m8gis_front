import Header from "../../components/Header";
import { FaFilter, FaSearch } from "react-icons/fa";
import { Box, Button, Grid, Typography } from "@mui/material";
import CnaeAutocomplete from "@components/inputs/autocomplete/CnaeAutocomplete";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";
import FiltersModal from "../../components/modals/FiltersModal";


const Home = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      cnae: [],
    },
  });
  const { homePageCnaeFilter } = useContext(FiltersContext);
  const [filterDrawer, setFilterDrawer] = useState(false);

  const onCloseFiltersModal = () => setFilterDrawer(false);
  const openFiltersModal = () => setFilterDrawer(true);

  const onSubmit = ({ cnae }) => {
    homePageCnaeFilter(cnae);
    navigate("/map");
  };

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        backgroundImage: "url(assets/images/company.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundBlendMode: "soft-light",
        backgroundSize: "60%",
      }}
    >
      <Header sx={{ marginBottom: "15vh" }} />
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

                <FormProvider {...form}>
                  <form
                    style={{ width: "100%" }}
                    onSubmit={form.handleSubmit(e => e.preventDefault)}
                  >
                    <Box sx={{ display: "flex", width: "100%" }}>
                      <CnaeAutocomplete
                        control={form.control}
                        sx={{
                          maxWidth: "80%",
                        }}
                      />
                      <Button
                        variant="contained"
                        onClick={form.handleSubmit(onSubmit)}
                      >
                        <FaSearch />
                      </Button>
                    </Box>
                  </form>
                </FormProvider>

                <Button
                  variant={"contained"}
                  sx={{
                    color: "white",
                    backgroundColor: "blue.primary",
                    marginTop: 2,
                  }}
                  startIcon={<FaFilter />}
                  onClick={openFiltersModal}
                >
                    <FiltersModal open={filterDrawer} onClose={onCloseFiltersModal} />

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
