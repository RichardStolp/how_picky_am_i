import { takeEvery, call, put } from "redux-saga/effects";
import {RECIEVED_RANDOM_NUMBER, 
        GET_RANDOM_NUMBER_ERROR, 
        GET_RANDOM_NUMBER} from "../Redux/constants/action-types";

export default function* watcherSaga(){
    yield takeEvery(GET_RANDOM_NUMBER, workerSaga);
}

function* workerSaga(){
    try{
        const payload = yield call(getData);
        yield put({type: RECIEVED_RANDOM_NUMBER, payload});
    } catch (e) {
        yield put({type:GET_RANDOM_NUMBER_ERROR, payload: e || 'failed' });
    }
}
function getData() {
    return fetch("http://localhost:8080/random").then(response => response.json());
}