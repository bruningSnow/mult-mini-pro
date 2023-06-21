import Taro, { getMenuButtonBoundingClientRect } from "@tarojs/taro";
import React, { CSSProperties, useState, ReactNode, useEffect } from "react";
import { View } from "@tarojs/components";
import Classnames from "classnames";
import { AtIcon } from "taro-ui";

import styles from "./index.module.scss";

const defaultProps = {
  text: "郝兜兜的组件库",
  isFixed: true,
  textColor: "rgb(23, 23, 23)",
  backColor: "rgb(23, 23, 23)",
  background: "white",
};

export interface PageNavProps {
  className?: string;
  style?: CSSProperties;
  text?: string; // nav 标题文字
  textColor?: CSSProperties["color"]; // nav 标题文字颜色
  showBack?: boolean; // 是否展示“回退”图标
  backColor?: CSSProperties["color"]; // “回退”图标颜色
  background?: CSSProperties["color"]; // nav 背景颜色
  isFixed?: boolean; // nav 是否 fixed 定位
  extraNode?: ReactNode; // 右侧额外自定义 ReactNode
}

export const PageNav: React.FC<PageNavProps> = (props) => {
  const {
    className,
    style,
    text,
    textColor,
    backColor,
    background,
    showBack,
    isFixed,
    extraNode,
  } = props;
  const [NavBarHeight, setNavBarHeight] = useState<number>(0);
  const [NavBarPaddingTop, setNavBarPaddingTop] = useState<number>(0);

  // 获取 NavBar 高度（适配不同机型）
  const getNavBarHeight = () => {
    const menuButtonInfo = getMenuButtonBoundingClientRect(); //胶囊相关信息
    const { top, height } = menuButtonInfo;
    setNavBarHeight(top + height + 10);
    setNavBarPaddingTop(top);
  };

  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      getNavBarHeight();
    }
  }, []);

  return (
    <View
      className={Classnames(styles["page-nav"], className)}
      style={{
        background,
        ...(style || {}),
        position: isFixed ? "fixed" : "relative",
        height: `${NavBarHeight}px`,
        paddingTop: `${NavBarPaddingTop}px`,
      }}
    >
      {props.children}
      {showBack && (
        <AtIcon
          onClick={() => Taro.navigateBack()}
          value="chevron-left"
          size="25"
          color={backColor}
          className={styles.icon}
        />
      )}
      {text && (
        <View style={{ color: textColor }} className={styles.text}>
          {text}
        </View>
      )}
      {extraNode}
    </View>
  );
};

PageNav.defaultProps = defaultProps;

export default PageNav;
