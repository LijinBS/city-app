import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Leaflet.scss";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Leaflet() {
  const position = [51.505, -0.09];
  const selectCurrentPosition = useSelector(
    (state) => state.landingPage.position
  );
  const [currentPosition, setPosition] = useState(position);
  useEffect(() => {
    console.log("selectCurrentPosition", selectCurrentPosition);
    setPosition(selectCurrentPosition);
  }, [selectCurrentPosition]);
  return (
    <div className="leaflet-container">
      <MapContainer center={currentPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup Easily customizable.</Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
}
