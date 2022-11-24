import { Reducer } from "redux";

export interface IUser {
  nickName: string;
  avatar: string;
  phone: string;
  vipInfo?: IObject;
}

export interface IState extends IObject {
  logo: string;
  scene: string | number;
  openId: string;
  sessionKey: string;
  networkType: string;
  currentPath: string;
  currentQueryStr: string;
  currentUrl: string;
  currentQuery: IObject;
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
