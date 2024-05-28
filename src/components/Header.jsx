import { Box, Typography } from "@mui/material";
import HeaderMenu from "./menu/HeaderMenu";
import logoM8 from "/assets/images/logo_m8_sistemas.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Header = ({ sx }) => {
  const navigate = useNavigate();

  const handlerBackHome = () => navigate("/");

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100vw",
        paddingX: 16,
        paddingY: 4,
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
      <HeaderMenu />
    </Box>
  );
};

export default Header;

Header.propTypes = {
  sx: PropTypes.object,
};
