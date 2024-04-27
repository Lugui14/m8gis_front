import { Divider, Paper, Typography, Box } from "@mui/material";

const QuadroSocios = ({ socios }) => {
  return (
    <Paper sx={{ p: 2 }} >
      <Typography variant="h6" gutterBottom component="div">
        Quadro de Sócios
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {socios.map((socio, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="caption" display="block" gutterBottom color="primary" fontWeight={"bold"} fontSize={"16px"}>
            Sócio: {socio.nome_socio  }
          </Typography>
          {/* Outras informações do sócio podem ser adicionadas aqui, se necessário */}
          <Typography variant="body1" gutterBottom fontSize={"18px"}>
            {socio.nome}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default QuadroSocios;
