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
        date: new Date().toString(),
        url: payload.data.image_url
    };

    if(localStorage.getItem('images')){
        const images = JSON.parse(localStorage.getItem('images'));
        const newImages = [...images, image];
        localStorage.setItem ("images", JSON.stringify(newImages));
    }

    yield put(fetchImageSuccess(image));
}

async function fetchImage(){
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY');
    const json = await response.json();
    return json;
}