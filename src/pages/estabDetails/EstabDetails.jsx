import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Exemplo de ícone de localização
import QuadroSocios from "../../components/quadroSocios/QuadroSocios";
import SegmentInfoItem from "../../components/segmentInfoItem/SegmentInfoItem";
import {
  HandymanOutlined,
  Money,
  People,
  Person,
  Receipt,
} from "@mui/icons-material";
import { FaBuilding } from "react-icons/fa";
import theme from "../../styles/theme";
import EmpresasRelacionadas from "../../components/empresasRelacionadas/EmpresasRelacionadas";
import CartaoCnpj from "../../components/cartaoCnpj/CartaoCnpj";
// Dados de exemplo para o cartão CNPJ
const cnpjData = {
  cnpj: "00.000.000/0001-00",
  razaoSocial: "Nome da Empresa Ltda",
  nomeFantasia: "Nome Fantasia",
  atividadePrincipal: "Atividade Principal",
  atividadesSecundarias: ["Atividade Secundária 1", "Atividade Secundária 2"],
  naturezaJuridica: "Natureza Jurídica",
  abertura: "Data de Abertura",
  situacao: "Situação",
  cep: "00000-000",
  logradouro: "Logradouro",
  numero: "Número",
  complemento: "Complemento",
  bairro: "Bairro",
  municipio: "Município",
  
  // ... mais dados
};

const InfoItem = ({ icon, title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: { sm: "100%", md: "50%", lg: "25%" }, // Ajusta o tamanho de acordo com breakpoints
        p: 2, // padding
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {icon}
        <Box sx={{ ml: 2, textAlign: "left" }}>
          <Typography variant="title" display="flex" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
const EstabDetails = () => {
  // Placeholder data, replace with data from your database
  const empresaData = {
    telefone: "1",
    email: "example@example.com",
    tipo: "Filial",
    capitalSocial: "R$ 0,00",
    faturamentoPresumido: "Informação não disponível",
    tributacao: "Simples Nacional",
    dataAbertura: "12/04/2024",
    situacao: "Ativa",
    porte: "Demais",
    socios: "0",
    funcionarios: "Informação não disponível",
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        color={theme.palette.info.main}
        fontWeight={"bold"}
        marginTop={"40px"}
      >
        Nome Empresa
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {/* Adicionado alignItems="stretch" para esticar os itens do grid */}
        {/* Resumo do Segmento */}
        <Grid item xs={12} md={4} lg={4}>
          {/* Ajustado para que md e lg tomem 4 de 12 */}
          <Paper elevation={1} sx={{ p: 2, minHeight: "100%" }}>
            {/* Adicionado minHeight */}
            <Typography variant="h6" color={theme.palette.info.main}>
              Resumo do Segmento
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.text.secondary}
            >
              Lanchonetes, casas de chá, de sucos e similares
            </Typography>
            <Divider sx={{ my: 2 }} />
            <SegmentInfoItem
              icon={<LocationOnIcon />}
              title="Brasil"
              value={42141}
            />
            <SegmentInfoItem
              icon={<LocationOnIcon />}
              title="Brasil"
              value={42141}
            />
            <SegmentInfoItem
              icon={<LocationOnIcon />}
              title="Brasil"
              value={42141}
            />
          </Paper>
        </Grid>

        {/* Informações Gerais da Empresa */}
        <Grid item xs={12} md={8} lg={8}>
          {/* Ajustado para que md e lg tomem 8 de 12 */}
          <Paper
            elevation={1}
            sx={{
              p: 2,
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Adicionado minHeight */}
            <Typography variant="h6" gutterBottom>
              Informações Gerais
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  flexGrow: 1,
                  // Define o espaço entre os InfoItem
                  "& > .MuiBox-root": {
                    marginBottom: 2, // Espaço na parte inferior de cada InfoItem
                  },
                }}
              >
                {/* InfoItems */}
                {/* ... InfoItems ... */}
                <InfoItem
                  icon={<PhoneIcon />}
                  title="Telefones"
                  value={empresaData.telefone}
                />
                <InfoItem
                  icon={<EmailIcon />}
                  title="E-mails"
                  value={empresaData.email}
                />
                <InfoItem
                  icon={<CalendarTodayIcon />}
                  title="Data de Abertura"
                  value={empresaData.dataAbertura}
                />
                <InfoItem
                  icon={<CheckCircleOutlineIcon />}
                  title="Situação"
                  value={empresaData.situacao}
                />
                <InfoItem
                  icon={<BusinessIcon />}
                  title="Tipo"
                  value={empresaData.tipo}
                />
                <InfoItem
                  icon={<AttachMoneyIcon />}
                  title="Capital Social"
                  value={empresaData.capitalSocial}
                />
                <InfoItem
                  icon={<FaBuilding />}
                  title="Porte Estimado"
                  value={empresaData.porte}
                />
                <InfoItem
                  icon={<Person />}
                  title="Socios"
                  value={empresaData.socios}
                />
                <InfoItem
                  icon={<HandymanOutlined />}
                  title="Faturamento"
                  value={empresaData.faturamentoPresumido}
                />
                <InfoItem
                  icon={<People />}
                  title="Quantidade de Funcionários"
                  value={empresaData.funcionarios}
                />
                <InfoItem
                  icon={<Receipt />}
                  title="Tributação"
                  value={empresaData.tributacao}
                />
            </Box>
            <Button variant="contained" color="primary">
              Ver as estatísticas do segmento
            </Button>
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={6} lg={4}>
          <EmpresasRelacionadas />
        </Grid>

        <Grid  item  xs={12} md={6} lg={8} >
          <CartaoCnpj data={cnpjData} />
          <Divider sx={{ my: 2 }} />
          <QuadroSocios data={empresaData.socios} />
        </Grid>

        <Grid item xs={12} md={6} lg={8}> 
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default EstabDetails;
