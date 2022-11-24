import Taro from "@tarojs/taro";

/**
 * 轮询检测 open_id 是否存在storage 中
 * @returns Promise
 */
interface CheckOpenIdProps {
  maxCount?: number;
  interTime?: number;
}
export const checkOpenId = (props?: CheckOpenIdProps) => {
  const { maxCount, interTime } = props || {};
  let timer: any = null;
  let count = 0;

  return new Promise((resolve, reject) => {
    let open_id = Taro.getStorageSync("open_id");

    if (!open_id) {
      timer = setInterval(() => {
        if (count > (maxCount || 50) && !open_id) {
          clearInterval(timer);
          reject("暂无 open_id");
          return;
        } else if (open_id) {
          clearInterval(timer);
          resolve(open_id);
          return;
        }
        open_id = Taro.getStorageSync("open_id");
        count++;
      }, interTime || 200);
    } else {
      clearInterval(timer);
      resolve(open_id);
    }
  });
};
