import { Component } from "react";
import {
  PageContainer,
  ShowProps,
  ScrollList,
  ScrollListProps,
} from "@/components/index";
import { View, Button } from "@tarojs/components";
import styles from "./index.module.scss";

class ScrollListPage extends Component<IObject, ScrollListProps> {
  constructor(props) {
    super(props);
    this.state = {
      refresherNode: undefined,
    };
  }

  onShareAppMessage() {
    return {
      title: "郝兜兜的组件库",
      path: "/subpackages/my/index",
    };
  }

  onShareTimeline() {
    return {
      text: "郝兜兜的组件库",
      pagePath: "/subpackages/my/index",
    };
  }

  render() {
    return (
      <PageContainer
        className={styles.index}
        pageNavProps={{ text: "scrollList", showBack: true }}
      >
        <ShowProps
          list={[
            "...ScrollViewProps",
            "refresherNode?: ReactNode; // 下拉刷新自定义 ReactNode",
            "/**",
            " * 注意，refresherNode 的高度和 top 的绝对值一定要相同，例如：",
            " * height: 80px; top: -80px",
            " * 且定位须为 position: absolute",
            " */",
          ]}
        />
        <Button
          onClick={() =>
            this.setState({
              refresherNode: (
                <View
                  style={{
                    background: "blue",
                    height: "100px",
                    top: "-100px",
                    position: "absolute",
                  }}
                >
                  自定义
                </View>
              ),
            })
          }
        >
          refresherNode
        </Button>
        <ScrollList {...this.state} style={{ height: "400px" }}>
          ScrollList 内容
        </ScrollList>
      </PageContainer>
    );
  }
}

export default ScrollListPage;
