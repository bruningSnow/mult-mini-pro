import React, { CSSProperties, useState } from "react";
import { View, ScrollView } from "@tarojs/components";
import Classnames from "classnames";

import styles from "./index.module.scss";

export interface ScrollListProps {
  className?: string;
  style?: CSSProperties;
}

export const ScrollList: React.FC<ScrollListProps> = (props) => {
  const { className, style } = props;
  const [refresherTriggered, setRefresherTriggered] = useState(true);

  const refresh = () => {
    setTimeout(() => {
      setRefresherTriggered(false);
    }, 1000);
  };

  return (
    <ScrollView
      className={Classnames(styles.index, className)}
      style={style}
      scrollY
      refresherEnabled
      enhanced
      showScrollbar={false}
      refresherTriggered={refresherTriggered}
      refresherDefaultStyle="none"
      onRefresherPulling={() => {
        console.log("onRefresherPulling");
        setRefresherTriggered(true);
      }}
      onRefresherRefresh={() => {
        console.log("onRefresherRefresh");
        refresh();
      }}
      // onRefresherRestore={() => console.log("onRefresherRestore")}
      // onRefresherAbort={() => console.log("onRefresherAbort")}
    >
      <View className={styles["refresh-container"]}>
        <View>下拉刷新</View>
      </View>
      <View>{props.children}</View>
    </ScrollView>
  );
};

export default ScrollList;
