import SpeedDial from "@mui/material/SpeedDial";
import { SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { useState } from "react";
import FiltersModal from "../modals/FiltersModal";
import ExportModal from "../modals/ExportModal";
import RouteIcon from "@mui/icons-material/Route";
import RoutesModal from "../modals/RoutesModal";

function MapSpeedDial() {
  const [filterDrawer, setFilterDrawer] = useState(false);

  const onCloseFiltersModal = () => setFilterDrawer(false);
  const openFiltersModal = () => setFilterDrawer(true);

  const [ExportDrawer, setExportDrawer] = useState(false);

  const onCloseExportModal = () => setExportDrawer(false);
  const openExportModal = () => setExportDrawer(true);

  const [routesDrawer, setRoutesDrawer] = useState(false);

  const onCloseRoutesModal = () => setRoutesDrawer(false);
  const openRoutesModal = () => setRoutesDrawer(true);

  return (
    <>
      <SpeedDial
        ariaLabel="Menu"
        sx={{ position: "absolute", bottom: 32, right: 32 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<FaFilter />}
          tooltipTitle={"Filters"}
          onClick={openFiltersModal}
        />

        <SpeedDialAction
          icon={<CiExport />}
          tooltipTitle={"Export"}
          onClick={openExportModal}
        />

        <SpeedDialAction
          icon={<RouteIcon />}
          tooltipTitle={"Routes"}
          onClick={openRoutesModal}
        />
      </SpeedDial>

      <FiltersModal open={filterDrawer} onClose={onCloseFiltersModal} />
      <ExportModal open={ExportDrawer} onClose={onCloseExportModal} />
      <RoutesModal open={routesDrawer} onClose={onCloseRoutesModal} />
    </>
  );
}

export default MapSpeedDial;
