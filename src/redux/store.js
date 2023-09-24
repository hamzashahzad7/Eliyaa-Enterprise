import { applyMiddleware, combineReducers, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  rootReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
