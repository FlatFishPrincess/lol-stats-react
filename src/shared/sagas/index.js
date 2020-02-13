import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_SUMMONER, FETCH_SUMMONER_SUCCESS, FETCH_SUMMONER_FAIL } from '../actions/index'; 

function* fetchMatchList ({name}) {
  try {
    const CREATE_LOCATION_URL = `https://lol-stats-backend.herokuapp.com/api/summoner/${name}`;
    const result = yield fetch(CREATE_LOCATION_URL);
    const matches = yield result.json();
    yield put({ type: FETCH_SUMMONER_SUCCESS, matches });
  } catch (error) {
    yield put({ type: FETCH_SUMMONER_FAIL, loading: false });
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_SUMMONER, fetchMatchList)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}