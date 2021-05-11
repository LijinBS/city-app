import React  from "react";
import { useDispatch } from "react-redux";
import { getCityDataAction } from "../../shared/redux/landing-page/Action";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./DataLoad.scss";

export default function DataLoad() {
  const dispatch = useDispatch();
  const dataMapper = {
      country : {
          US: 'us',
      },
      state : {
        massachusetts: 'ma',
        ma: 'ma'
      },
      city: {
          belmont: 'belmont'
      }
  }
  //   const [cityName, setCityName] = useState();
  //   const [countryName, setCountryName] = useState();
  //   const [stateName,  setStateName] = useState();

  //   const updateCityName = (event) => {
  //     setCityName(event.target.value);
  //   };
  //   const updateStateName = (event) => {
  //     setStateName(event.target.value);
  //   };
  //    const updateCountryName = (event) => {
  //     setCountryName(event.target.value);
  //   };

  //   const submitCityData = () => {
  //     if (cityName) {
  //       dispatch(getCityDataAction(cityName));
  //     }
  //   };

  return (
    <>
      <div className="data-load-container">
          <div className="data-load-container-header"> Enter City Details</div>
        <Formik
          initialValues={{
            cityName: "",
            stateName: "",
            countryName: "",
          }}
          validationSchema={Yup.object().shape({
            countryName: Yup.string().required("Country is required"),
            stateName: Yup.string().required("State is required"),
            cityName: Yup.string().required("City is required"),
          })}
          onSubmit={(values) => {
          console.log(values)
            const {cityName, stateName, countryName} = values;
            const country = dataMapper.country[countryName.toLowerCase()] || countryName;
            const state = dataMapper.country[stateName.toLowerCase()] || stateName;
            const city = dataMapper.country[cityName.toLowerCase()] || cityName;
            dispatch(getCityDataAction({country, state, city}));
          }}
          render={({ errors, touched }) => (
            <Form>
              <div className="data-load-container-country">
                <label htmlFor="countryName" className={"data-load-container-country-label"}>Country Name</label>
                <Field
                  id="countryName"
                  name="countryName"
                  className={"data-load-container-country-element"   + (errors.countryName && touched.countryName ? ' is-invalid' : '')}
                  placeholder="US"
                />
                <ErrorMessage
                  name="countryName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="data-load-container-state">
                <label htmlFor="stateName" className={"data-load-container-state-label"}>Last Name</label>
                <Field
                  id="stateName"
                  name="stateName"
                  className={"data-load-container-state-element" +  (errors.stateName && touched.stateName ? ' is-invalid' : '')}
                  placeholder="massachusetts"
                />
                <ErrorMessage
                  name="stateName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="data-load-container-city">
                <label htmlFor="stateName" className={"data-load-container-city-label"}>City Name</label>
                <Field
                  id="cityName"
                  name="cityName"
                  className={"data-load-container-city-element" + (errors.cityName && touched.cityName ? ' is-invalid' : '')}
                  placeholder="Belmont"
                />
                <ErrorMessage
                  name="cityName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            <div className="data-load-container-submit">
              <button type="submit">Submit</button>
            </div>
            </Form>
          )}
        />
      </div>
    </>
  );
}
