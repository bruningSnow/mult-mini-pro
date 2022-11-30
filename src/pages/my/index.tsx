import { Component } from "react";
import { PageContainer } from "@/components/index";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

interface IState {
  isOpened: boolean;
}

class My extends Component<IObject, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  onShareAppMessage() {
    return {
      title: "模版小程序",
      path: "/pages/my/index",
    };
  }

  onShareTimeline() {
    return {
      text: "模版小程序",
      pagePath: "/pages/my/index",
    };
  }

  render() {
    return (
      <PageContainer className={styles.index}>
        <View className={styles.content}>内容</View>
      </PageContainer>
    );
  }
}

export default My;
