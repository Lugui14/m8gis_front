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
import companyBackground from "/assets/images/company.svg"; // Certifique-se de ajustar o caminho do import para o correto
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
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchEstabs } from "@/hooks/estabHook";
import Header from "@/components/Header";
import testMap from "@/components/testMap/TestMap";
import TestMap from "@/components/testMap/TestMap";


// Dados de exemplo para o cartão CNPJ

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
  const { id } = useParams(); // Acessando o ID da URL
  const { data, isLoading, error } = useFetchEstabs(id);
  //passando pro cartao cnpj
  const cnpjData = {
    cnpj: data?.cnpj_basico,
    razaoSocial: data?.empresa?.razao_social,
    nomeFantasia: data?.nome_fantasia,
    cnae: data?.empresa?.cnae_descricao,
    naturezaJuridica: data?.empresa?.natureza_juridica_descricao,
    dataAbertura: data?.data_inicio_atividade,
    cep: data?.endereco? data?.endereco?.cep : "",
    bairro: data?.endereco ? data?.endereco?.bairro : "",
    cidade: data?.endereco ? data?.endereco?.cidade : "",
    logradouro: data?.endereco ? data?.endereco?.logradouro : "",
    numero: data?.endereco ? data?.endereco?.numero : "",
  };


  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
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
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        backgroundImage: `url(${companyBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundBlendMode: "soft-light",
        backgroundSize: "60%",
      }}>
        <Header/>
      <Typography
        variant="h4"
        gutterBottom
        color={theme.palette.info.main}
        fontWeight={"bold"}
        marginTop={"40px"}
      >
        {data.empresa.razao_social}
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {/* Adicionado alignItems="stretch" para esticar os itens do grid */}
        {/* Resumo do Segmento */}
        <Grid item xs={12} md={4} lg={4}>
          {/* Ajustado para que md e lg tomem 4 de 12 */}
          <Paper elevation={1} sx={{ p: 2, minHeight: "100%" }}>
            {/* Adicionado minHeight */}
            <Typography variant="h6" color={theme.palette.text.primary}>
              Veja números relativos ao segmento de:
            </Typography>
            <Typography
              variant="h6"
              fontSize={"22px"}
              fontWeight={"bold"}
              color={theme.palette.info.main}
            >
              {data.empresa.cnae_descricao}
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
            <Typography variant="h6" gutterBottom fontSize={"32px"}>
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
                value={data.data_inicio_atividade}
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
                value={data.empresa.capital_social}
              />
              <InfoItem
                icon={<FaBuilding />}
                title="Porte Estimado"
                value={data.empresa.porte}
              />
              <InfoItem
                icon={<Person />}
                title="Socios"
                value={data?.empresa?.socios?.length}
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

        <Grid item xs={12} md={6} lg={8}>
          <CartaoCnpj data={cnpjData} />
          <Divider sx={{ my: 2 }} />
          <QuadroSocios socios={data?.empresa?.socios || []} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
        <TestMap
              address={data?.endereco?.logradouro.toLowerCase()}
              city={data?.endereco?.cidade.toLowerCase()}
              number = {data?.endereco?.numero}
              country={"Brazil".toLowerCase()}
            />
            
        </Grid>
      </Grid>
    </Container>
  );
};

export default EstabDetails;
