import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "./Leaflet.scss";
import * as L from "leaflet";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

export default function Leaflet() {
  const position = [51.505, -0.09];
  const selectCurrentPosition = useSelector(
    (state) => state.landingPage.position
  );
  const [currentPosition, setPosition] = useState(position);
  useEffect(() => {
    if(selectCurrentPosition.length) {
        setPosition(selectCurrentPosition);
    }
  }, [selectCurrentPosition]);

  useEffect(() => {
    setPosition([51.505, -0.09]);
  }, []);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="leaflet-container">
      <MapContainer center={currentPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick coords={currentPosition} />
        <Marker position={currentPosition}>
          <Popup>A pretty CSS3 popup Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
