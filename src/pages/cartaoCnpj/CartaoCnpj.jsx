import { Divider, Paper, Typography } from "@mui/material";

const CartaoCnpj = ({ data }) => {
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Cartão CNPJ</Typography>
        <Divider sx={{ mb: 2 }} />
        {/* Assumindo que `data` é um objeto contendo todas as informações da empresa */}
        <Typography variant="body2" gutterBottom>CNPJ: {data.cnpj}</Typography>
        <Typography variant="body2" gutterBottom>Razão Social: {data.razaoSocial}</Typography>
        {/* ... mais itens do cartão CNPJ */}
      </Paper>
    );
  };
  

  export default CartaoCnpj;