import { combineReducers } from "redux";
import LandingPageReducer from "./landing-page/Reducer";

const RootReducer = combineReducers({
    landingPage: LandingPageReducer,
  });

  export default RootReducer