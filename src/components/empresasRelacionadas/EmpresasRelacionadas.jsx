import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


// Componente para cada empresa relacionada
const EmpresaRelacionada = ({ id, name, address, onViewMore }) => {
  return (
    <Box sx={{ mb: 2, p: 2, boxShadow: 1, borderRadius: 2 }}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2" color="text.secondary">{address}</Typography>
      <Button sx={{ mt: 1 }} variant="outlined" size="small" onClick={() => onViewMore(id)}>Ver empresa</Button>
    </Box>
  );
};  
  // Lista de empresas relacionadas
  const EmpresasRelacionadas = ({ empresasRelacionadas }) => {
    const navigate = useNavigate()
    
    const formatarEndereco = (endereco) => {
      const {logradouro, cidade, bairro, cep}=endereco
      return `${logradouro}, ${bairro}, ${cidade} - ${cep}`
    }
    
    const handleViewMore=(id)=>{
      navigate (`/estabelecimento/${id}`)
    }
    return (
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Empresas Relacionadas</Typography>
        <Divider sx={{ mb: 2 }} />
        {empresasRelacionadas.map((company, index) => (
          <EmpresaRelacionada key={index} id={company.id} name={company.razao_social} address={formatarEndereco(company.endereco)} onViewMore={handleViewMore} />
        ))}
        <Button sx={{ mt: 2 }} variant="contained" color="primary">Ver mais</Button>
      </Paper>
    );
  };
  export default EmpresasRelacionadas;
  