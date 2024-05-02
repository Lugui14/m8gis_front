import { Box, Button, Divider, Paper, Typography } from "@mui/material";

// Componente para cada empresa relacionada
const EmpresaRelacionada = ({ name, address }) => {
    return (
      <Box sx={{ mb: 2, p: 2, boxShadow: 1, borderRadius: 2 }}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{address}</Typography>
        <Button sx={{ mt: 1 }} variant="outlined" size="small">Ver empresa</Button>
      </Box>
    );
  };
  
  // Lista de empresas relacionadas
  const EmpresasRelacionadas = ({ empresasRelacionadas }) => {
    // Exemplo de dados de empresas - substituir por dados reais
    /*const companies = [
      { name: 'Empresa 1', address: 'Endereço 1' },
      { name: 'Empresa 2', address: 'Endereço 2' },
      { name: 'Empresa 33', address: 'Endereço 4' },
      { name: 'Empresa 44', address: 'Endereço 6' },

      // ... mais empresas
    ];*/
    const companies = empresasRelacionadas
  
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Empresas Relacionadas</Typography>
        <Divider sx={{ mb: 2 }} />
        {companies.map((company, index) => (
          <EmpresaRelacionada key={index} name={company.razao_social} />
        ))}
        <Button sx={{ mt: 2 }} variant="contained" color="primary">Ver mais</Button>
      </Paper>
    );
  };
  export default EmpresasRelacionadas;
  