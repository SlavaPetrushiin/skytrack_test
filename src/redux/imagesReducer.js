import {DELETE_IMAGE, DOWNLOAD_IMAGES, FETCH_IMAGE_SUCCESS} from "./types";

const initialState = {
    image: {},
    images: [],
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.image,
                images: [...state.images, action.image],
                error: null
            };
        case DOWNLOAD_IMAGES:
            return {
                ...state,
                images:  [...action.images],
                error: null
            };
        case DELETE_IMAGE:
            return {
                ...state,
                images:  state.images.filter((image) => {
                    return image.id !== action.id
                }),
                error: null
            };
        default:
            return state

    }
};

export default imagesReducer;