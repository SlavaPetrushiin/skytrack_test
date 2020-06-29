import {DOWNLOAD_IMAGES, FETCH_IMAGE_ERROR, FETCH_IMAGE_SUCCESS, REQUEST_IMAGE} from "./types";

export const fetchImageSuccess = (image) => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        image
    }
};

export const fetchImageError = (error) => {
    return {
        type: FETCH_IMAGE_ERROR,
        error
    }
};

export const fetchImage = () => {
    return {
        type: REQUEST_IMAGE,
    }
};

export const downloadImages = (images) => {
    return {
        type: DOWNLOAD_IMAGES,
        images
    }
};