import {FETCH_IMAGE_SUCCESS} from "./types";

const initialState = {
    images: []
};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_SUCCESS:
            debugger
            return {
                ...state,
                images: [...state.images, action.image]
            };
        default:
            return state

    }
};

export default imagesReducer;