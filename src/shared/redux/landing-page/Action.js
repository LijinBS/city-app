import { GET_CITY_DATA, GET_CITY_DATA_FAILURE, GET_CITY_DATA_SUCCESS, SET_POSITION } from './ActionType.js'


export const getCityDataAction = (args)  => {
    console.log('args', args)
    return {
        type: GET_CITY_DATA,
        payload: args
    }
} 
export const getCityDataActionSuccess = (payload)  => {
    return {
        type: GET_CITY_DATA_SUCCESS,
        payload
    }
} 
export const getCityDataActionFailure = ()  => {
    return {
        type: GET_CITY_DATA_FAILURE,
        payload: []
    }
} 

export const setPosition = (payload) => {
    return {
        type: SET_POSITION,
        payload
    }
}