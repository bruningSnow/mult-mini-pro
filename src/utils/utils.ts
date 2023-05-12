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

export const uuid = (len = 8, radix = 16) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  const value: any[] = [];
  let i = 0;
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    let r;
    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = "-";
    value[14] = "4";
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | (Math.random() * 16);
        value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return value.join("");
};
