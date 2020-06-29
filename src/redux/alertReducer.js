import {FETCH_IMAGE_ERROR, HIDE_ALERT, SHOW_ALERT} from "./types";

const initialState = {
    error: null
};

const alertReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default alertReducer;