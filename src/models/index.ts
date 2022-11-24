import { combineReducers } from "redux";
import global, { IState as GlobalModelState } from "./global";

export interface ConnectState {
  global: GlobalModelState;
}

export default combineReducers({
  global: global.reducers?.save as any,
});
