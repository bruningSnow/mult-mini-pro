import React, { CSSProperties, ReactNode } from "react";
import ClassNames from "classnames";
import { View, Swiper, SwiperItem } from "@tarojs/components";

import styles from "./index.module.scss";

export interface SwiperListProps {
  classname?: string;
  style?: CSSProperties;
  childList: ReactNode[];
  onChange: any;
  current: number;
}

export const SwiperList: React.FC<SwiperListProps> = (props) => {
  const { childList, onChange, current, classname = "", style = {} } = props;

  return (
    <Swiper
      className={ClassNames(styles.swiper, classname)}
      style={style}
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      autoplay={false}
      current={current}
      onChange={({ detail }) => onChange(detail.current)}
    >
      {childList.map((banner, bannerIndex) => (
        <SwiperItem className={styles.SwiperItem} key={bannerIndex}>
          <View className={styles.swiperItem_ImageContainer}>{banner}</View>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default SwiperList;
