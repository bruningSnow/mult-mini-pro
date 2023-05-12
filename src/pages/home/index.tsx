import { Component } from "react";
import { PageContainer } from "@/components/index";

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

  onRefresherRefresh = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 300);
    });
  };

  render() {
    return <PageContainer>首页</PageContainer>;
  }
}

export default Home;
