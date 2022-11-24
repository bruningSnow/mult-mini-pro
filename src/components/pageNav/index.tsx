import React, { CSSProperties, useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import Classnames from "classnames";
import { useDidShow, getMenuButtonBoundingClientRect } from "@tarojs/taro";
import { AtIcon } from "taro-ui";

import styles from "./index.module.scss";

const defaultProps = {
  text: "小程序模版",
};

export interface PageNavProps {
  className?: string;
  style?: CSSProperties;
  text?: string;
  textColor?: CSSProperties["color"];
  hasBack?: boolean;
  backColor?: CSSProperties["color"];
  isFixed?: boolean;
}

export const PageNav: React.FC<PageNavProps> = (props) => {
  const {
    className,
    style,
    text,
    textColor = "rgb(23, 23, 23)",
    backColor = "rgb(23, 23, 23)",
    hasBack,
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

  useDidShow(async () => {
    if (process.env.TARO_ENV === "weapp") {
      getNavBarHeight();
    }
  });

  return (
    <View
      className={Classnames(styles.index, className)}
      style={{
        ...(style || {}),
        position: "fixed",
        height: `${NavBarHeight}px`,
        paddingTop: `${NavBarPaddingTop}px`,
      }}
    >
      {hasBack && (
        <AtIcon
          onClick={() => Taro.navigateBack()}
          value="chevron-left"
          size="25"
          color={backColor}
          className={styles.icon}
        />
      )}
      <View style={{ color: textColor }} className={styles.text}>
        {text}
      </View>
    </View>
  );
};

PageNav.defaultProps = defaultProps;

export default PageNav;
