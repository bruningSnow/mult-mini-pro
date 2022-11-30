import { Reducer } from "redux";

export interface IUser {
  nickName: string;
  avatar: string;
  phone: string;
  vipInfo?: IObject;
}

export interface IState extends IObject {
  logo: string; // 小程序头像
  name: string; // 小程序名称
  scene: string | number; // 场景值
  openId: string; // openId
  sessionKey: string;
  networkType: string; // 网络类型
  currentPath: string; // 小程序当前页面 path
  currentQueryStr: string; // 小程序当前页面 query
  currentUrl: string; // 小程序当前页面 url （path + query）
  currentQuery: IObject; // 小程序当前页面 根据 query 解析成的对象
  user: IUser;
}

export interface IReducers {
  save: Reducer;
}

export interface IGlobalModel extends IModel<"global", IState, IReducers> {}

const globalModel: IGlobalModel = {
  namespace: "global",
  state: {
    logo: "",
    name: "",
    scene: "",
    openId: "",
    sessionKey: "",
    networkType: "none",
    currentPath: "",
    currentQueryStr: "",
    currentUrl: "",
    currentQuery: {},
    user: {
      nickName: "",
      avatar: "",
      phone: "",
      vipInfo: {},
    },
  },

  reducers: {
    save(state = globalModel.state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default globalModel;
