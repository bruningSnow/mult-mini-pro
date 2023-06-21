import React, { useState, CSSProperties, useEffect } from "react";
import { View } from "@tarojs/components";
import Classnames from "classnames";

import styles from "./index.module.scss";

type TBaseFun = (e: Event) => void;

export interface ActionSheetProps {
  className?: string;
  style?: CSSProperties;
  visible?: boolean; // 是否展示下拉弹窗
  contentStyle?: CSSProperties;
  contentHeight?: CSSProperties["height"]; // 弹窗内容高度
  onClose?: TBaseFun; // 滑块关闭回调
}

/**
 * 注意，当为 scroll-view 内部元素时，z-index 失效
 * 链接：https://developers.weixin.qq.com/community/develop/doc/0008ec653dcdc0eed419f70e751400?highLine=z-index%2520%25E5%25A4%25B1%25E6%2595%2588
 */
export const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const {
    className,
    style,
    visible,
    contentStyle,
    contentHeight = "auto",
    onClose,
  } = props;
  const [innerVisible, setInnerVisible] = useState(false);

  const onInnerClose = (e) => {
    setInnerVisible(false);
    onClose?.(e);
  };

  useEffect(() => {
    setInnerVisible(Boolean(visible));
  }, [visible]);

  return (
    <View
      className={Classnames(
        innerVisible
          ? `${styles["actionSheet-mask"]} ${styles["actionSheet-show"]}`
          : styles["actionSheet-mask"],
        className
      )}
      style={style}
      onClick={onInnerClose}
    >
      <View
        className={
          innerVisible
            ? `${styles["actionSheet-mask-content"]} ${styles["actionSheet-mask-content-show"]}`
            : styles["actionSheet-mask-content"]
        }
        style={{
          height: innerVisible ? contentHeight : 0,
          ...(contentStyle || {}),
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </View>
    </View>
  );
};

export default ActionSheet;
