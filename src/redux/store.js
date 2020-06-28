import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import imagesReducer from "./imagesReducer";
import {sagaWatcher} from "./sagas";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    images: imagesReducer,
    });

const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher);

window.store = store

export default store;