import { divIcon, point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import MapSpeedDial from "../../components/buttons/MapSpeedDial";
import { useContext } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const { estabelecimentos } = useContext(FiltersContext);
  const navigate = useNavigate();
  const handleViewMore = id => {
    navigate(`/estabelecimento/${id}`);
  };

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
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {console.log(estabelecimentos)}
          {estabelecimentos &&
            estabelecimentos
              .filter(({ latitude, longitude }) => latitude && longitude)
              .map(({ id, latitude, longitude, razao_social, cnpj_basico,endereco }) => (
                <Marker key={id} position={[latitude, longitude]}>
                  <Popup>
                    <Paper sx={{ p: 4 }}>
                      <Typography variant="h6" gutterBottom component="div">
                      {razao_social}

                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                        <Box key={id} sx={{ mb: 2 }}>
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            color="primary"
                            fontWeight={"bold"}
                            fontSize={"18px"}
                          >
                            CNPJ: {cnpj_basico}
                            
                          </Typography>
                          <Typography
                            variant="body1"
                            gutterBottom
                            fontSize={"18px"}
                          >
                            Endereco: {endereco}
                          </Typography>
                          <Typography
                            variant="body1"
                            gutterBottom
                            fontSize={"18px"}
                          >
                            Capital Social:
                          </Typography>
                          <Button  variant="contained" color="primary" onClick={() => handleViewMore(id)}>Ver detalhes</Button>
                        </Box>
                    </Paper>
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
