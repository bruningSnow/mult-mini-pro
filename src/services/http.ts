import Taro from "@tarojs/taro";

type TRequest = Parameters<typeof Taro.request<any, any>>[0] & {
  need_loading?: boolean;
  need_scene?: boolean;
  need_openId?: boolean;
};

const request = (par: Omit<TRequest, "success" | "fail">) => {
  const host = Taro.getStorageSync("host");
  const scene = Taro.getStorageSync("scene");
  const open_id = Taro.getStorageSync("open_id");
  const {
    data = {},
    header = {},
    url,
    method,
    need_loading,
    need_scene = true,
    need_openId = true,
    ...rest
  } = par || {};
  const innerHeader = {
    ...header,
    "content-type": "application/json", // 默认值
  };
  let innerUrl = (host || "") + url;
  let innerData = data || {};

  /**
   * 参数配置
   */
  if (innerData.hasOwnProperty("open_id") && !innerData.open_id) {
    return;
  }

  //接口加上场景值
  if (need_scene && scene) {
    innerData.scene = parseInt(scene);
  }
  //接口加上open_id
  if (need_openId && open_id) {
    innerData.open_id = open_id;
  }
  /******* 参数配置结束 */

  // 开始请求
  return new Promise((resolve, reject) => {
    if (need_loading) {
      Taro.showLoading({
        title: "加载中",
      });
    }

    Taro.request({
      url: innerUrl,
      data: innerData,
      header: innerHeader,
      method: method || "POST",
      ...rest,
      mode: "cors",
      success: (successCallbackResult) => {
        if (need_loading) {
          Taro.hideLoading();
        }

        const data = successCallbackResult.data;
        if (data && !data.success && data.msg) {
          Taro.showToast({
            title: data.msg,
            icon: "error",
          });
        }
        resolve(successCallbackResult.data);
      },
      fail: (failCallbackResult: IObject) => {
        if (need_loading) {
          Taro.hideLoading();
        }

        if (failCallbackResult.status !== 200) {
          Taro.showToast({
            title: failCallbackResult.data.msg,
            icon: "error",
          });
        }
        reject(failCallbackResult.data);
      },
    });
  });
};

export default request;
