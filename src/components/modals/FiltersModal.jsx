import { Box, Button, Grid, Modal, Tab, Tabs } from "@mui/material";
import { IoMdClose } from "react-icons/io";

import PropTypes from "prop-types";
import FiltersForm from "../forms/FiltersForm";
import { useState } from "react";
import EstabelecimentosTable from "../tables/EstabelecimentosTable";
import RouteForm from "../forms/RouteForm";

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

const tabs = [
  {
    label: "Filtros",
    component: <FiltersForm />,
  },
  {
    label: "Listagem",
    component: <EstabelecimentosTable />,
  },
];

const FiltersModal = ({ open, onClose }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBannerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {tabs.map((tab, index) => (
                <Tab key={index} label={tab.label} value={index} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={onClose} sx={{ fontSize: 32, borderRadius: 12 }}>
              <IoMdClose />
            </Button>
          </Grid>
          <Grid item xs={12}>
            {tabs[currentTab].component}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FiltersModal;

FiltersModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
