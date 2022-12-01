import React, { CSSProperties, useMemo } from "react";
import { View } from "@tarojs/components";
import Classnames from "classnames";

import styles from "./index.module.scss";

export interface FlexItemProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  flexDirection?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  hasDivader?: boolean;
}

export const FlexItem: React.FC<FlexItemProps> = (props) => {
  const {
    className,
    style,
    onClick,
    flexDirection = "row",
    alignItems = "center",
    justifyContent = "space-between",
    hasDivader,
  } = props;

  const innerStyle = useMemo(() => {
    return {
      flexDirection,
      alignItems,
      justifyContent,
      ...(style || {}),
    };
  }, [style, flexDirection, alignItems, justifyContent]);

  const innerClass = useMemo(() => {
    if (hasDivader) {
      return Classnames(className, styles.indexDivader);
    }
    return className;
  }, [className, hasDivader]);

  return (
    <View
      className={Classnames(styles.index, innerClass)}
      style={innerStyle}
      onClick={onClick}
    >
      {props.children}
    </View>
  );
};

export default FlexItem;
