import { Component } from "react";
import { PageContainer, ScrollList, SwipeAction } from "@/components/index";
import { View } from "@tarojs/components";

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
    return (
      <PageContainer>
        <ScrollList onRefresherRefresh={this.onRefresherRefresh}>
          <View style={{ width: "50vw" }}>
            <SwipeAction
              onClick={() => console.log("uuu")}
              rightNode={
                <View onClick={() => console.log("hahah")}>hahah</View>
              }
              maxDistance={100}
            >
              111
            </SwipeAction>
          </View>
        </ScrollList>
      </PageContainer>
    );
  }
}

export default Home;
