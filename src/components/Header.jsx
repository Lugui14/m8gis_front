import { Box, Button, Typography } from "@mui/material";
import HeaderMenu from "./menu/HeaderMenu";
import logoM8 from "/assets/images/logo_m8_sistemas.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Header = ({ sx }) => {
  const navigate = useNavigate();

  const handlerBackHome = () => navigate("/");

  const handlerGoMap = () => navigate("/map");

  return (
    <Box
      sx={{
        display: "flex",
        paddingX: 16,
        paddingY: 6,
        justifyContent: "space-between",
        alignItems: "center",
        color: "text.primary",
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: "2xl",
          fontWeight: "bold",
          ":hover": { cursor: "pointer" },
        }}
      >
        <img
          onClick={handlerBackHome}
          src={logoM8}
          alt="M8 Sistemas"
          style={{ maxWidth: 150 }}
        />
      </Typography>
      <Button
        onClick={handlerGoMap}
        sx={{
          backgroundColor: "white",
          borderRadius: 4,
          px: 3,
          py: 2,
          border: "2px solid rgba(0,0,100,0.6)",
          boxShadow: " 0px 4px 15px -5px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          sx={{ color: "text.primary" }}
          fontWeight={"bold"}
          fontSize={20}
        >
          Abrir Mapa
        </Typography>
      </Button>
    </Box>
  );
};

export default Header;

Header.propTypes = {
  sx: PropTypes.object,
};
