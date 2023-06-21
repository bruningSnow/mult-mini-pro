import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { PageContainer } from "@/components/index";

import styles from "./index.module.scss";

const componentPageList = [
  {
    label: "PageContainer",
    url: "",
  },
  {
    label: "PageNav",
    url: "",
  },
  {
    label: "ScrollList",
    url: "",
  },
  {
    label: "SwipeAction",
    url: "",
  },
  {
    label: "ActionSheet",
    url: "",
  },
];

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
