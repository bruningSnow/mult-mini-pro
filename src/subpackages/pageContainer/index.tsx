import { Component } from "react";
import {
  PageContainer,
  ShowProps,
  PageContainerProps,
} from "@/components/index";
import { View, Button } from "@tarojs/components";
import styles from "./index.module.scss";

class PageContainerPage extends Component<IObject, PageContainerProps> {
  constructor(props) {
    super(props);
    this.state = {
      showMark: false,
      showPageNav: false,
    };
  }

  onShareAppMessage() {
    return {
      title: "郝兜兜的组件库",
      path: "/subpackages/pageContainer/index",
    };
  }

  onShareTimeline() {
    return {
      text: "郝兜兜的组件库",
      pagePath: "/subpackages/pageContainer/index",
    };
  }

  render() {
    return (
      <PageContainer
        className={styles.index}
        {...this.state}
        pageNavProps={{ text: "pageContainer", showBack: true }}
      >
        <ShowProps
          list={[
            "className?: string;",
            "style?: CSSProperties;",
            "showPageNav?: boolean; // 是否展示页面 nav",
            "showMark?: boolean; // 是否开启页面透明 mark，禁止点击页面内容",
            "pageNavProps?: PageNavProps;",
          ]}
        />
        <View style={{ marginTop: 30 }}>
          <Button onClick={() => this.setState({ showMark: true })}>
            showMark
          </Button>
          <Button onClick={() => this.setState({ showPageNav: true })}>
            showPageNav
          </Button>
          <Button onClick={() => this.setState({ showPageNav: false })}>
            unShowPageNav
          </Button>
        </View>
      </PageContainer>
    );
  }
}

export default PageContainerPage;
