/* eslint-disable react/prop-types */
import {
  divIcon,
  point,
  Icon,
  Routing,
  latLng,
  marker,
  polyline,
  geoJSON,
} from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import MapSpeedDial from "../../components/buttons/MapSpeedDial";
import { useContext, useEffect, useRef } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";
import { useNavigate } from "react-router-dom";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import * as turf from "@turf/turf";
import EnumCnaes from "../../enum/EnumCnaes";

const Map = () => {
  const { estabelecimentos, route } = useContext(FiltersContext);
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

  const redIcon = new Icon({
    iconUrl: "/pins/red.png",
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41],
  });

  const yellowIcon = new Icon({
    iconUrl: "/pins/yellow.png",
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41],
  });

  const greenIcon = new Icon({
    iconUrl: "/pins/greenFlag.png",
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41],
  });

  const flagIcon = new Icon({
    iconUrl: "/pins/flag.png",
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41],
  });

  const cnaesIcons = (cnae, id) => {
    if (id === 0) {
      return new Icon({
        iconUrl: `/pins/cnaes/${cnae}/red.png`,
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [5, -40],
        shadowSize: [41, 41],
      });
    }

    return new Icon({
      iconUrl: `/pins/cnaes/${cnae}/yellow.png`,
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [5, -40],
      shadowSize: [41, 41],
    });
  };

  const getIconType = (cnae, id) => {
    const teste = id % 2;
    if (
      [
        EnumCnaes.MANUTENCAO_MECANICA,
        EnumCnaes.PECAS_AUTOMOTORES,
        EnumCnaes.PNEUMATICOS,
        EnumCnaes.OPTICA,
      ].includes(cnae)
    ) {
      return cnaesIcons(cnae, teste);
    }
    return getIcon(teste);
  };

  const getIcon = id => {
    switch (id) {
      case 0:
        return redIcon;
      default:
        return yellowIcon;
    }
  };

  const RoutingControlWithBuffer = ({ start, end, buffer }) => {
    const map = useMap();
    const bufferLayerRef = useRef(null);

    useEffect(() => {
      if (!map) return;

      const routingControl = Routing.control({
        waypoints: [latLng(start[0], start[1]), latLng(end[0], end[1])],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#3b7abd", weight: 4 }],
        },
        createMarker: (i, waypoint, n) => {
          const markers = [greenIcon, flagIcon];
          return marker(waypoint.latLng, {
            icon: markers[i % markers.length],
          });
        },
      }).addTo(map);

      routingControl.on("routesfound", e => {
        const route = e.routes[0];
        const line = polyline(route.coordinates);

        const lineString = turf.lineString(
          route.coordinates.map(coord => [coord.lng, coord.lat])
        );

        const buffered = turf.buffer(lineString, buffer, { units: "meters" });

        if (bufferLayerRef.current) {
          map.removeLayer(bufferLayerRef.current);
          bufferLayerRef.current = null;
        }

        bufferLayerRef.current = geoJSON(buffered, {
          style: {
            color: "#579cd5",
            weight: 2,
            opacity: 0.2,
            fillOpacity: 0.05,
          },
        }).addTo(map);
      });

      return () => {
        routingControl.off();
        map.removeControl(routingControl);
        if (bufferLayerRef.current) {
          map.removeLayer(bufferLayerRef.current);
          bufferLayerRef.current = null;
        }
      };
    }, [map, start, end, buffer]);

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
          {estabelecimentos &&
            estabelecimentos
              .filter(({ latitude, longitude }) => latitude && longitude)
              .map(
                ({
                  id,
                  latitude,
                  longitude,
                  razao_social,
                  cnpj_basico,
                  endereco,
                  cnae_id,
                  capital_social,
                }) => (
                  <Marker
                    key={id}
                    position={[latitude, longitude]}
                    icon={getIconType(cnae_id, id)}
                  >
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
                            Capital Social: {capital_social}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleViewMore(id)}
                          >
                            Ver detalhes
                          </Button>
                        </Box>
                      </Paper>
                    </Popup>
                  </Marker>
                )
              )}
        </MarkerClusterGroup>
        {estabelecimentos && estabelecimentos.length > 1 && (
          <RoutingControlWithBuffer
            start={[route.start?.latitude, route.start?.longitude]}
            end={[route.end?.latitude, route.end?.longitude]}
            buffer={500}
          />
        )}
      </MapContainer>
      <MapSpeedDial />
    </Box>
  );
};

export default Map;
