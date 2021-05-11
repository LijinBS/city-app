import {
    GET_CITY_DATA_SUCCESS,
    GET_CITY_DATA_FAILURE,
    GET_CITY_DATA,
    SET_POSITION
} from './ActionType.js'

const initialState  = {
    cityData: { isFetching : false, data:[], error: null },
    position: []
}

const LandingPageReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_CITY_DATA: {
            return {
                ...state,
                cityData: { ...state.cityData, isFetching : true}
            }
        }
        case GET_CITY_DATA_SUCCESS: {
          return {
            ...state,
            cityData: { ...state.cityData, isFetching : false, error: false, data: action.payload},
          };
        }  
        case GET_CITY_DATA_FAILURE: {
          return {
            ...state,
            cityData: { ...state.cityData, isFetching : false, error: true, data: action.payload},
          };
        }
        case SET_POSITION: {
            return {
                ...state,
                position: action.payload
            }  
        }
        default:
      return state;
    }
}

export default LandingPageReducer;