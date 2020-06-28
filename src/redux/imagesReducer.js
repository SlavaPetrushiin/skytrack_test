import {DOWNLOAD_IMAGES, FETCH_IMAGE_SUCCESS} from "./types";

const initialState = {
    image: {},
    images: []
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.image,
                images: [...state.images, action.image]
            };
        case DOWNLOAD_IMAGES:
            return {
                ...state,
                images:  [...action.images]
            };
        default:
            return state

    }
};

export default imagesReducer;