import { legacy_createStore } from "redux";
import reducers from "./reducers/index";

const store = legacy_createStore(
  reducers,
  {},
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
