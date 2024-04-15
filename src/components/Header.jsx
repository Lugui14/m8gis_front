import { Box, Typography } from "@mui/material";
import HeaderMenu from "./menu/HeaderMenu";

const Header = () => {
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
        marginBottom: "15vh",
      }}
    >
      <Typography sx={{ fontSize: "2xl", fontWeight: "bold" }}>
        <img
          src="assets/images/logo_m8_sistemas.png"
          alt="M8 Sistemas"
          style={{ maxWidth: 150 }}
        />
      </Typography>
      <HeaderMenu />
    </Box>
  );
};

export default Header;
