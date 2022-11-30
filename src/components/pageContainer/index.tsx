import Taro, {
  useDidShow,
  getMenuButtonBoundingClientRect,
} from "@tarojs/taro";
import React, { CSSProperties, useState, useMemo } from "react";
import { View } from "@tarojs/components";
import Classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ConnectState } from "@/models/index";
import { PageNav, PageNavProps } from "..";

import styles from "./index.module.scss";

const tabBar = ["pages/home/index", "pages/shopcar/index", "pages/my/index"];

const defaultProps: PageContainerProps = {
  hasPageNav: true,
  pageNavProps: {
    isFixed: true,
  },
};

export interface PageContainerProps {
  className?: string;
  style?: CSSProperties;
  hasPageNav?: boolean;
  pageNavProps?: PageNavProps;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const dispatch = useDispatch();
  const { className, style, hasPageNav, pageNavProps } = props;
  const { user, currentPath } = useSelector(
    (state: ConnectState) => state.global
  );
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [NavBarHeight, setNavBarHeight] = useState<number>(0);

  const hasMenu = useMemo(() => {
    return tabBar.includes(currentPath);
  }, [currentPath]);

  /**
   * 获取路由相关信息
   * @returns
   */
  const getRouters = (): IObject => {
    const { options, route } = getCurrentPages()[0];
    const currentQueryStr = Object.keys(options).reduce((pre, key) => {
      pre += `&${key}=${options[key]}`;
      return pre.slice(1);
    }, "");
    let currentUrl = route;
    if (currentQueryStr) {
      currentUrl += `?${currentQueryStr}`;
    }

    return {
      currentPath: route,
      currentQueryStr,
      currentUrl,
      currentQuery: options,
    };
  };

  /**
   * 获取 local 中 open_id 等数据
   * @returns
   */
  const getLocalData = (): IObject => {
    const scene = Taro.getStorageSync("scene");
    const openId = Taro.getStorageSync("open_id");
    const sessionKey = Taro.getStorageSync("session_key");

    return { scene, openId, sessionKey };
  };

  /**
   * 获取当前网络
   */
  const getNetWork = (): Promise<IObject> => {
    return new Promise((resolve) => {
      Taro.getNetworkType({
        success: (res) => {
          resolve(res);
        },
      });
    });
  };

  /**
   * 获取当前用户信息
   */
  const getUserInformation = () => {
    setTimeout(() => {
      dispatch({
        type: "global/save",
        payload: { user: { ...user, phone: "" } },
      });
    }, 1000);
  };

  // 获取 NavBar 高度（适配不同机型）
  const getNavBarHeight = () => {
    const menuButtonInfo = getMenuButtonBoundingClientRect(); //胶囊相关信息
    const { top, height } = menuButtonInfo;
    setNavBarHeight(top + height + 10);
  };

  useDidShow(() => {
    getNetWork().then(({ networkType }) => {
      dispatch({
        type: "global/save",
        payload: { networkType, ...getRouters(), ...getLocalData() },
      });
    });
    getUserInformation();
    getNavBarHeight();
  });

  return (
    <View
      className={Classnames(styles.index, className)}
      style={{
        paddingBottom: hasMenu
          ? "calc(123rpx + env(safe-area-inset-bottom))"
          : "0",
        paddingTop:
          hasPageNav && pageNavProps?.isFixed ? `${NavBarHeight}px` : "0px",
        ...(style || {}),
      }}
    >
      {hasPageNav && <PageNav {...pageNavProps} />}
      {props.children}
      {!user.phone && (
        <View
          className={styles.mark}
          onClick={() => setIsOpened(true)}
          style={{ zIndex: isOpened ? 1 : 9999 }}
        />
      )}
    </View>
  );
};

PageContainer.defaultProps = defaultProps;

export default PageContainer;
