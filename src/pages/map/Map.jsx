import { divIcon, point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import MapSpeedDial from "../../components/buttons/MapSpeedDial";
import { useContext } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";

const Map = () => {
  const { estabelecimentos } = useContext(FiltersContext);

  const createCustomClusterIcon = cluster => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <Box sx={{ width: "100vw", maxHeight: "100vh" }}>
      <MapContainer center={[-27.0922364, -52.6166878]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={15}
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {estabelecimentos &&
            estabelecimentos
              .filter(({ latitude, longitude }) => latitude && longitude)
              .map(({ id, latitude, longitude, razao_social, cnpj_basico }) => (
                <Marker key={id} position={[latitude, longitude]}>
                  <Popup>
                    <div>
                      <span>Nome: {razao_social}</span>
                      <br />
                      <span>CNPJ: {cnpj_basico}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
        </MarkerClusterGroup>
      </MapContainer>
      <MapSpeedDial />
    </Box>
  );
};

export default Map;
