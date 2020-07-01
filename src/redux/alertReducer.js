import {FETCH_IMAGE_ERROR} from "./types";

const initialState = {
    errorMessage: null
};

const alertReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_ERROR:
            return {
                ...state,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

export default alertReducer;