import axios from "axios";

//const BASE_URL = 'http://api.zippopotam.us/us/ma/'
const BASE_URL = 'http://api.zippopotam.us/'
export function GET(args) {
    const { country, state, city} = args
    return axios.get(`${BASE_URL}${country}/${state}/${city}`).then((data) => {
        return data
    }).catch(error => {
        return error
    })
}