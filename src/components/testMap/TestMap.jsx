import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "../GeoCoderMarker/GeoCoderMarker";

function TestMap({ city, bairro, address, number }) {
  return (
    <MapContainer
      center={[-27.0922364, -52.6166878]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "40vh", width: "100%", marginTop: "20px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
      <GeoCoderMarker address={`${city} ${bairro} ${address} ${number}`} />
    </MapContainer>
  );
}

export default TestMap;
