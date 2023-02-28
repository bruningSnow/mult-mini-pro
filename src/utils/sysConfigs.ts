import Taro from "@tarojs/taro";
import { IState } from "../app";

interface IApp extends IObject {
  state: IState;
  checkVersion: () => void;
  wxLogin: () => void;
  checkSession: () => void;
}

export const get_sys_app: () => IApp = () => {
  const App = Taro.getApp();
  return App ? App["$app"] : {};
};
