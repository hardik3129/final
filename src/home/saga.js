import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../utils/Axios";
import { getHomeDataFailed, getHomeDataSuccess } from "./action";
import { GET_DATA } from "./constant";

/**
 * Get All Post Api
 */
function* getHomePageContent() {
  try {
    const response = yield call(get, `/users`);
    yield put(getHomeDataSuccess(response)); //get respone
  } catch (error) {
    yield put(getHomeDataFailed(error)); // data get failed
  }
}

function* contentSaga() {
  yield takeLatest(GET_DATA, getHomePageContent); // final result and redirect
}

export default contentSaga;
