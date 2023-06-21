import React from "react";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

export interface ShowPropsProps {
  list: string[];
}

/**
 * 注意，当为 scroll-view 内部元素时，z-index 失效
 * 链接：https://developers.weixin.qq.com/community/develop/doc/0008ec653dcdc0eed419f70e751400?highLine=z-index%2520%25E5%25A4%25B1%25E6%2595%2588
 */
export const ShowProps: React.FC<ShowPropsProps> = (props) => {
  const { list } = props;

  return (
    <View className={styles["show-props"]}>
      {list.map((text, index) => (
        <View className={styles["show-props-item"]} key={index}>
          {text}
        </View>
      ))}
    </View>
  );
};

export default ShowProps;
