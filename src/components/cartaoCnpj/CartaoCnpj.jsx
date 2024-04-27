import { Divider, Paper, Typography, Box } from "@mui/material";

const CartaoCnpj = ({ data }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom component="div">
        Cartão CNPJ
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {Object.entries(data).map(([key, value]) => (
        <Box key={key} sx={{ mb: 2 }}>
          <Typography variant="caption" display="block" gutterBottom color="primary" fontWeight={"bold"}>
            {key.toUpperCase()}
          </Typography>
          <Typography variant="body1" gutterBottom fontSize={"18px"}>
            {value}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

  export default CartaoCnpj;