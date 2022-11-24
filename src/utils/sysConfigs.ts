import Taro from "@tarojs/taro";

interface IApp extends IObject {
  state: {};
  checkVersion: () => void;
  wxLogin: () => void;
  checkSession: () => void;
}

export const get_sys_app: () => IApp = () => {
  const App = Taro.getApp();
  return App ? App["$app"] : {};
};
