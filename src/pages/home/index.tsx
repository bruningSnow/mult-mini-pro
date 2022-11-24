import { Component } from "react";
import { PageContainer } from "@/components/index";
import styles from "./index.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
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
    return <PageContainer className={styles.index}>home 页面</PageContainer>;
  }
}

export default Home;
