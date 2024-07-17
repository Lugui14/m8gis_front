import { divIcon, point } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import MapSpeedDial from "../../components/buttons/MapSpeedDial";
import { useContext, useEffect } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";
import { useNavigate } from "react-router-dom";
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import * as turf from '@turf/turf';

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

  const redIcon = new L.Icon({
    iconUrl: '/pins/red.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41]
  });

  const yellowIcon = new L.Icon({
    iconUrl: '/pins/yellow.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41]
  });

  const greenIcon = new L.Icon({
    iconUrl: '/pins/greenFlag.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41]
  });

  const flagIcon = new L.Icon({
    iconUrl: '/pins/flag.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41]
  });

  const cnaesIcons = (cnae, id) => {
    if (id === 0) {
      return new L.Icon({
        iconUrl: `/pins/cnaes/${cnae}/red.png`,
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [5, -40],
        shadowSize: [41, 41]
      });
    }

    return new L.Icon({
      iconUrl: `/pins/cnaes/${cnae}/yellow.png`,
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [5, -40],
      shadowSize: [41, 41]
    });
  }

  const getIconType = (cnae, id) => {
    const teste = id % 2
    switch (cnae) {
      case 4520001:
        return cnaesIcons(cnae, teste);
      case 4530703:
        return cnaesIcons(cnae, teste);
      case 4530705:
        return cnaesIcons(cnae, teste);
      case 4774100:
        return cnaesIcons(cnae, teste);
      default:
        return getIcon(teste); 
    }
  };

  const getIcon = id => {
    switch (id) {
      case 0:
        return redIcon;
      default:
        return yellowIcon; 
    }
  };

  const RoutingControl = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      const routingControl = L.Routing.control({
        waypoints: [L.latLng(-27.1264268, -52.6098364), L.latLng(-27.0952861, -52.7050167)],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: '#3b7abd', weight: 4 }]
        },
        createMarker: (i, waypoint, n) => {
          const markers = [greenIcon, flagIcon];
          return L.marker(waypoint.latLng, {
            icon: markers[i % markers.length]
          });
        },
      }).addTo(map);

      routingControl.on('routesfound', e => {
        const route = e.routes[0];
        const line = L.polyline(route.coordinates);

        const lineString = turf.lineString(route.coordinates.map(coord => [coord.lng, coord.lat]));

        const buffered = turf.buffer(lineString, 500, { units: 'meters' });

        L.geoJSON(buffered, {
          style: {
            color: '#579cd5',
            weight: 2,
            opacity: 0.2,
            fillOpacity: 0.05
          }
        }).addTo(map);
      });

      return () => {
        map.removeControl(routingControl);
      };
    }, );

    return null;
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
          {/* {console.log(estabelecimentos)} */}
          {estabelecimentos &&
            estabelecimentos
              .filter(({ latitude, longitude }) => latitude && longitude)
              .map(({ id, latitude, longitude, razao_social, cnpj_basico,endereco, cnae_id }) => (
                <Marker key={id} position={[latitude, longitude]} icon={getIconType(cnae_id, id)}>
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
        {estabelecimentos && estabelecimentos.length > 1 && (
          <RoutingControl
            start={[estabelecimentos[0].latitude, estabelecimentos[0].longitude]}
            end={[estabelecimentos[1].latitude, estabelecimentos[1].longitude]}
            buffer={1}
          />
        )}
      </MapContainer>
      <MapSpeedDial />
    </Box>
  );
};

export default Map;