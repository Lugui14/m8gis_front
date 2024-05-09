import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import ExportDoc from "../export/ExportDoc";

const modalBannerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: 4,
};

const ExportModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBannerStyle}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography variant="h4" color={"text.primary"}>
              Exportar
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={onClose} sx={{ fontSize: 32, borderRadius: 12 }}>
              <IoMdClose />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ExportDoc />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ExportModal;

ExportModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
