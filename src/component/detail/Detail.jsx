import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../../shared/redux/landing-page/Action";
import "./Detail.scss";

export default function Detail() {
  const [cityData, setCityData] = useState([]);
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState(
    "Please enter country, State and City details"
  );
  //   const [position, setPosition] = useState([51.505, -0.09]);
  const selectCityData = useSelector((state) => state.landingPage.cityData);

  useEffect(() => {
    if (Object.keys(selectCityData.data).length) {
      setCityData(selectCityData.data.places);
    } else {
      if (selectCityData.error) {
        setErrorMessage("Invalid country, State and City details");
      }
    }
    if (selectCityData.isFetching) {
      setErrorMessage("API Is fetching the data.....");
    }
  }, [selectCityData]);

  const selectedCity = (data) => {
    console.log("selectedCity", data);
    dispatch(setPosition([data.latitude, data.longitude]))
  };
  return (
    <div className="detail-container">
      {cityData.length > 0 ? (
        <div className="detail-container-group">
          <div className="detail-container-group-title">
            Latitude and Longitude Details
          </div>
          <div className="detail-container-group-container">
            {cityData.map((data, index) => {
              return (
                <div
                  className="detail-container-group-container-city"
                  key={data.latitude + data.longitude}
                >
                  <div
                    className="detail-container-group-container-city-name"
                    onClick={() => selectedCity(data)}
                  >{`CITY ${index + 1}:`}</div>
                  <ul>
                    <li>Latitude : {data.latitude}</li>
                    <li>Longitude : {data.longitude}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="detail-container-error">{errorMessage}</div>
      )}
    </div>
  );
}
