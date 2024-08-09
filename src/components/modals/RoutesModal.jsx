import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import RouteForm from "../forms/RouteForm";
import PropTypes from "prop-types";

const modalBannerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "60vh",
  maxHeight: "60vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: 4,
};

const RoutesModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBannerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography variant={"h4"}>Buscar rota</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={onClose} sx={{ fontSize: 32, borderRadius: 12 }}>
              <IoMdClose />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <RouteForm onClose={onClose} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default RoutesModal;

RoutesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
