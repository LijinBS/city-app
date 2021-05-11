import { takeLatest, call, put} from "redux-saga/effects";
import { GET } from "../../service/RestService";
import { getCityDataActionFailure, getCityDataActionSuccess } from "./Action";
import { GET_CITY_DATA } from "./ActionType";

function* getCityData ({payload}) {
    const response = yield call(GET, payload);
    console.log(response, 'response')
    if(response.status === 200) {  
        console.log(response.data)
        yield put(getCityDataActionSuccess(response.data));
    } else {
        yield put(getCityDataActionFailure())
    }
}

export default function* LandingPageWatcher() { 

   yield takeLatest(GET_CITY_DATA, getCityData)
}