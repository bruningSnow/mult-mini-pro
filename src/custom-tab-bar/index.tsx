import React, { CSSProperties } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Classnames from "classnames";
import { useSelector } from "react-redux";
import { ConnectState } from "@/models/index";

import styles from "./index.module.scss";

type TMenuItem = {
  path_url: string;
  thumbnail_url: string;
  active: string;
  activity_id?: number;
  page_name?: string;
  target_type?: string;
  style?: CSSProperties;
};

const defaultProps = {
  menuList: [
    {
      activity_id: 16633,
      page_name: "首页",
      path_url: "pages/home/index",
      target_type: "homePages",
      thumbnail_url:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/31420c49-bc20-414e-877b-7964639971c978359980891.png",
      active:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/720d635d-e969-4cf2-813a-76ac5b166dd167835998017.png",
      style: {
        width: "25px",
        height: "11px",
        marginTop: "2px",
      },
    },
    {
      activity_id: 16635,
      page_name: "商城",
      path_url: "pages/shopcar/index",
      target_type: "shopPages",
      thumbnail_url:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/53c5f076-41eb-43dc-8fc7-74bb2ba26baf78359980851.png",
      active:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/9b318ee1-8682-46d2-958f-9d8ddaa5670167835998058.png",
      style: {
        width: "25px",
        height: "11px",
        marginTop: "2px",
      },
    },
    {
      activity_id: 16636,
      page_name: "个人中心",
      path_url: "pages/my/index",
      target_type: "myPages",
      thumbnail_url:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/171412fd-76da-40ed-955d-0d24edc0c9209710328icon.svg",
      active:
        "https://udh.oss-cn-hangzhou.aliyuncs.com/43cce627-3b40-4e52-b0b3-ad7ca7bcb8c4872295icon1.svg",
    },
  ],
};

export interface MenuProps {
  className?: string;
  style?: CSSProperties;
  menuList?: TMenuItem[];
}

export const Menu: React.FC<MenuProps> = (props) => {
  const { className, style, menuList } = props;
  const { currentUrl } = useSelector((state: ConnectState) => state.global);

  return (
    <View
      className={Classnames(styles.index, className)}
      id="tab-bar"
      style={style}
    >
      <View className={styles.menuList_container}>
        {(menuList || []).map((menuItem, menuItemIndex: number) => (
          <View
            className={styles.menu}
            key={menuItemIndex}
            onClick={() => {
              if (menuItem.path_url && menuItem.path_url !== currentUrl) {
                Taro.switchTab({ url: "/" + menuItem.path_url });
              }
            }}
          >
            <Image
              className={styles.img}
              mode="widthFix"
              style={menuItem.style || {}}
              src={
                currentUrl === menuItem.path_url
                  ? menuItem.active
                  : menuItem.thumbnail_url
              }
            />
            <View
              className={styles.text}
              style={{
                color: currentUrl === menuItem.path_url ? "#000000" : "#C3C3C3",
              }}
            >
              {menuItem.page_name}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

Menu.defaultProps = defaultProps;

export default Menu;
