import React, { useState, ReactNode } from "react";
import { View, ScrollView, ScrollViewProps } from "@tarojs/components";
import Classnames from "classnames";

import styles from "./index.module.scss";

export interface ScrollListProps
  extends Omit<ScrollViewProps, "refresherTriggered" | "onRefresherRefresh"> {
  refresherNode?: ReactNode;
  onRefresherRefresh?: (arg?: any) => Promise<any>;
}

export const ScrollList: React.FC<ScrollListProps> = (props) => {
  const {
    className,
    style,
    refresherNode,
    onRefresherPulling,
    onRefresherRefresh,
    ...rest
  } = props;
  const [refresherTriggered, setRefresherTriggered] = useState(true);

  const innerRefresherPulling = (...arg: [any]) => {
    onRefresherPulling?.(...arg);
    setRefresherTriggered(true);
  };

  const innerRefresherRefresh = async (...arg: [any]) => {
    try {
      await onRefresherRefresh?.(...arg);
      setRefresherTriggered(false);
    } catch (error) {
      setRefresherTriggered(false);
    }
  };

  return (
    <ScrollView
      className={Classnames(styles["scroll-list"], className)}
      style={style}
      scrollY
      refresherEnabled
      enhanced
      showScrollbar={false}
      refresherTriggered={refresherTriggered}
      refresherDefaultStyle="none"
      onRefresherPulling={innerRefresherPulling}
      onRefresherRefresh={innerRefresherRefresh}
      {...rest}
    >
      {refresherNode || (
        <View className={styles["refresh-container"]}>
          <View>下拉刷新</View>
        </View>
      )}
      <View>{props.children}</View>
    </ScrollView>
  );
};

export default ScrollList;
