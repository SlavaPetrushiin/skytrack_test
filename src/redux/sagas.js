import {takeEvery, put, call} from "redux-saga/effects";
import {REQUEST_IMAGE} from "./types";
import {fetchImageError, fetchImageSuccess} from "./actions";
import requestImageApi from "../api/requestImageApi";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_IMAGE, requestImagesSaga)
}

function* requestImagesSaga() {
    try{
        const payload = yield call(fetchImage);

        const image = {
            title: payload.title,
            date: new Date().toString(),
            url: payload.image_url
        };

        yield call(storage.saveImages.bind(storage), image);

        yield put(fetchImageSuccess(image));
    }
    catch (error) {
        yield put(fetchImageError(error.message));
    }
}

const storage = {
    KEYS: {
        images: "images"
    },

    async saveImages(image) {
        if(localStorage.getItem(this.KEYS.images)){
            const images = JSON.parse(localStorage.getItem(this.KEYS.images));
            const newImages = [...images, image];
            localStorage.setItem (this.KEYS.images, JSON.stringify(newImages));
        }
    }
};


async function fetchImage(){
    const response = await requestImageApi.getImage();
    const json = (await response.json()).data;
    return json;
}