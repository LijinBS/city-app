import React from "react";
import DataLoad from "../component/dataLoad/DataLoad";
import Detail from "../component/detail/Detail";
import Leaflet from "../component/leaflet/Leaflet";

import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="city-container">
      <div className="city-container-header">City APP</div>
      <div className="city-container-body">
        <div className="city-container-group">
          <DataLoad />
          <Detail />
        </div>
        <Leaflet/>
      </div>
    </div>
  );
}
