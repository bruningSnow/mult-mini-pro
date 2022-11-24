import { Component } from "react";
import { PageContainer } from "@/components/index";
import styles from "./index.module.scss";

class Shopcar extends Component {
  onShareAppMessage() {
    return {
      title: "模版小程序",
      path: "/pages/shopcar/index",
    };
  }

  onShareTimeline() {
    return {
      text: "模版小程序",
      pagePath: "/pages/shopcar/index",
    };
  }

  render() {
    return <PageContainer className={styles.index}>商城页面</PageContainer>;
  }
}

export default Shopcar;
