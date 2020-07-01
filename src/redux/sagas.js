import {takeEvery, put, call} from "redux-saga/effects";
import {REQUEST_IMAGE} from "./types";
import {fetchImageError, fetchImageSuccess} from "./actions";
import requestImageApi from "../api/requestImageApi";
import storageApi from "../api/storageApi";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_IMAGE, requestImagesSaga)
}

function* requestImagesSaga() {
    try{
        const payload = yield call(fetchImage);

        const image = {
            id: payload.image_url,
            title: payload.title,
            date: new Date().toString(),
            url: payload.image_url
        };

        yield call(()=> storageApi.saveImages(image));

        yield put(fetchImageSuccess(image));
    }
    catch (error) {
        yield put(fetchImageError(error.message));
    }
}

async function fetchImage(){
    const response = await requestImageApi.getImage();
    const json = (await response.json()).data;
    return json;
}