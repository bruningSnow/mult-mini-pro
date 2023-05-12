import React, { CSSProperties, ReactNode } from "react";
import { View } from "@tarojs/components";
import Classnames from "classnames";

import styles from "./index.module.scss";

export interface SpinProps {
  className?: string;
  style?: CSSProperties;
  spining?: boolean;
  loadNode?: ReactNode;
}

export const Spin: React.FC<SpinProps> = (props) => {
  const { className, style, spining, loadNode } = props;

  return (
    <View className={Classnames(styles["spin"], className)} style={style}>
      {spining && (loadNode || "loading")}
      {props.children}
    </View>
  );
};

export default Spin;
