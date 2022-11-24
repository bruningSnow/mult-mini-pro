import { Component } from "react";
import { Provider } from "react-redux";
import Taro from "@tarojs/taro";
import configStore from "./store";
import { checkOpenId } from "./utils/utils";
import {} from "./services/index";
import "./app.scss";

const store = configStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 检查版本
   */
  checkVersion() {
    const updateManager = Taro.getUpdateManager();

    if (updateManager) {
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
      });
      updateManager.onUpdateReady(function () {
        React.api.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
      });
    }
  }

  /**
   * 登录获取用户的open_id
   */
  wxLogin() {
    Taro.login({
      success: (res) => {
        // 根据 code 获取 open_id & session_key
        // Taro.setStorageSync("open_id", res.result.open_id);
        // Taro.setStorageSync("session_key", res.result.session_key);
      },
    });
  }

  /**
   * 判断session是否有效
   * 判断storage是否存在open_id，若存在去验证open_id是否有效，不存在去登陆
   */
  checkSession() {
    // const scene = Taro.getStorageSync("scene");
    // if (scene === 1154) return; //朋友圈内打开“单页模式”

    Taro.checkSession({
      success: () => {},
      fail: () => this.wxLogin(),
    });
  }

  onLaunch(options) {
    Taro.clearStorage();
  }

  /**
   * 错误路径容错
   */
  onPageNotFound() {
    Taro.redirectTo({
      url: "/pages/home/index",
    });
  }

  /**
   * 错误监控上报
   * @param {*} err
   */
  onError(err) {}

  componentDidMount() {}

  componentDidShow(options) {
    const { scene } = options;
    // 版本检测
    this.checkVersion();
    // 检测登录是否有效
    this.checkSession();
    Taro.setStorageSync("scene", scene);
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
