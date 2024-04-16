import SpeedDial from "@mui/material/SpeedDial";
import { SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { useState } from "react";
import FiltersModal from "@components/modals/FiltersModal";

function MapSpeedDial() {
  const [filterDrawer, setFilterDrawer] = useState(false);

  const onCloseFiltersModal = () => setFilterDrawer(false);
  const openFiltersModal = () => setFilterDrawer(true);

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
          onClick={() => {}}
        />
      </SpeedDial>

      <FiltersModal open={filterDrawer} onClose={onCloseFiltersModal} />
    </>
  );
}

export default MapSpeedDial;
