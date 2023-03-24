import { Component } from "react";
import { PageContainer, ScrollList } from "@/components/index";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onShareAppMessage() {
    return {
      title: "模版小程序",
      path: "/pages/home/index",
    };
  }

  onShareTimeline() {
    return {
      text: "模版小程序",
      pagePath: "/pages/home/index",
    };
  }

  render() {
    return (
      <PageContainer>
        <ScrollList>
          <View className={styles.content}>内容1</View>
        </ScrollList>
      </PageContainer>
    );
  }
}

export default Home;
