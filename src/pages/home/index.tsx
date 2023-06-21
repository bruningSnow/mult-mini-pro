import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { PageContainer } from "@/components/index";

import styles from "./index.module.scss";

let componentPageList = [
  {
    label: "PageContainer",
    url: "/subpackages/pageContainer/index",
  },
  {
    label: "PageNav",
    url: "/subpackages/pageNav/index",
  },
  {
    label: "ActionSheet",
    url: "/subpackages/actionSheet/index",
  },
  {
    label: "ScrollList",
    url: "/subpackages/scrollList/index",
  },
  {
    label: "SwipeAction",
    url: "/subpackages/swipeAction/index",
  },
];

const getStrCharCodeAt = (str: string) => str.charCodeAt(0);

/** A-Z 排序 */
componentPageList.sort(
  (preItem, curItem) =>
    getStrCharCodeAt(preItem.label) - getStrCharCodeAt(curItem.label)
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer>
        <View className={styles.home}>
          {componentPageList.map(({ label, url }, index) => (
            <View
              key={index}
              className={styles["component-item"]}
              onClick={() => Taro.navigateTo({ url })}
            >
              {label}
            </View>
          ))}
        </View>
      </PageContainer>
    );
  }
}

export default Home;
