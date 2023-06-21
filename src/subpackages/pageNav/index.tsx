import { Component } from "react";
import { PageContainer, ShowProps, PageNavProps } from "@/components/index";
import { Button, View } from "@tarojs/components";
import styles from "./index.module.scss";

const defaultState: PageNavProps = {
  text: "pageNav",
  textColor: "#000000",
  backColor: "#000000",
  background: "#ffffff",
  isFixed: false,
  showBack: false,
  extraNode: null,
};

class PageNavPage extends Component<IObject, PageNavProps> {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  onShareAppMessage() {
    return {
      title: "郝兜兜的组件库",
      path: "/subpackages/pageNav/index",
    };
  }

  onShareTimeline() {
    return {
      text: "郝兜兜的组件库",
      pagePath: "/subpackages/pageNav/index",
    };
  }

  render() {
    return (
      <PageContainer className={styles.index} pageNavProps={{ ...this.state }}>
        <ShowProps
          list={[
            "className?: string;",
            "style?: CSSProperties;",
            "text?: string; // nav 标题文字",
            "textColor?: CSSProperties['color']; // nav 标题文字颜色",
            "showBack?: boolean; // 是否展示“回退”图标",
            "backColor?: CSSProperties['color']; // “回退”图标颜色",
            "background?: CSSProperties['color']; // nav 背景颜色",
            "isFixed?: boolean; // nav 是否 fixed 定位",
            "extraNode?: ReactNode; // 右侧额外自定义 ReactNode",
          ]}
        />
        <Button onClick={() => this.setState({ text: "自定义标题" })}>
          text
        </Button>
        <Button onClick={() => this.setState({ textColor: "red" })}>
          textColor
        </Button>
        <Button onClick={() => this.setState({ showBack: true })}>
          showBack
        </Button>
        <Button onClick={() => this.setState({ backColor: "blue" })}>
          backColor
        </Button>
        <Button onClick={() => this.setState({ background: "orange" })}>
          background
        </Button>
        <Button onClick={() => this.setState({ isFixed: true })}>
          isFixed
        </Button>
        <Button
          onClick={() => this.setState({ extraNode: <View>extraNode</View> })}
        >
          extraNode
        </Button>
        <Button onClick={() => this.setState(defaultState)}>重置</Button>
      </PageContainer>
    );
  }
}

export default PageNavPage;
