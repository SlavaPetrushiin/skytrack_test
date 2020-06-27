import {takeEvery, put, call} from "redux-saga/effects";
import {REQUEST_IMAGE} from "./types";
import {fetchImageSuccess} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_IMAGE, sagaWorker)
}


function* sagaWorker() {
    const payload = yield call(fetchImage);

    const image = {
        title: payload.data.title,
        date: new Date(),
        url: payload.data.fixed_height_small_url
    };

    yield put(fetchImageSuccess(image))
}

async function fetchImage(){
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY');
    const json = await response.json();
    return json;
}