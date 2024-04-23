import { Box, Typography, useTheme } from "@mui/material";

const SegmentInfoItem = ({ icon, title, value }) => {
  const theme = useTheme();
  
return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        mb: theme.spacing(2),
        bgcolor: 'background.paper',
        // Esta é a largura total do item, ajuste conforme necessário para seu layout
        maxWidth: 345,
      }}>
        <Box sx={{ fontSize: theme.typography.h4.fontSize }}>
          {icon}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ml: 2,
          flexGrow: 1, // Permite que este Box cresça e empurre o ícone para a esquerda
          width: { xs: '100%', sm: '100%', md: '100%', lg: '25%' }, // Ajusta o tamanho de acordo com breakpoints
        }}>
          <Typography variant="title" sx={{ color: theme.palette.primary.main, fontWeight: "light", fontSize: "18px" }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: "bold", my: 1, fontSize: "26px" }}>
            {new Intl.NumberFormat().format(value)}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary, fontSize: "14px" }}>
            Registros
          </Typography>
        </Box>
      </Box>
    );
  };
export default SegmentInfoItem