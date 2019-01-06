import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export const dispatch = store.dispatch;
export default store;
