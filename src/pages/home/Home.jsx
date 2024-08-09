import Header from "../../components/Header";
import "./Home.css";
import { Box, Button, Typography } from "@mui/material";
import CnaeAutocomplete from "@components/inputs/autocomplete/CnaeAutocomplete";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";

const Home = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      cnae: [],
    },
  });
  const { homePageCnaeFilter } = useContext(FiltersContext);

  const onSubmit = ({ cnae }) => {
    homePageCnaeFilter(cnae);
    navigate("/map");
  };

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        background:
          "radial-gradient(circle, #0283FA 0%, #3CD0FF 30%, rgba(255,255,255,1) 90%)",
      }}
    >
      <Box className="glassmorphism-bg">
        <Header />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          height={"70vh"}
          px={8}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2} width={"35%"}>
            <Typography
              as={"h1"}
              fontSize={64}
              fontWeight={"bold"}
              color={"text.primary"}
            >
              Captação de <br /> leads M8 Sistemas
            </Typography>
            <Typography
              as={"h4"}
              fontSize={24}
              color={"text.primary"}
              fontWeight={"light"}
              mb={2}
            >
              GIS de localização de empresas <br /> para captação de novos leads
            </Typography>
            <Box>
              <Typography p={1} color={"text.primary"}>
                {" "}
                Insira um ou mais CNAEs para pesquisa
              </Typography>
              <CnaeAutocomplete
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  borderRadius: 2,
                }}
                control={form.control}
              />
            </Box>
            <Button
              variant="contained"
              onClick={form.handleSubmit(onSubmit)}
              sx={{
                mt: 3,
                background:
                  "linear-gradient(90deg, rgba(67,135,218,1) 0%, rgba(109,174,254,1) 100%);",
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
                boxShadow: 0,
                borderRadius: 3,
                py: 1,
                width: "25%",
              }}
            >
              Pesquisar
            </Button>
          </Box>
          <Box>
            <img
              width={"80%"}
              style={{ transform: "rotateY(180deg)" }}
              src="adventurer.svg"
              alt="global"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
