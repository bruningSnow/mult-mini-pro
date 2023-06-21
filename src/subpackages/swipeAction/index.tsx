import { Component } from "react";
import {
  PageContainer,
  ShowProps,
  SwipeAction,
  SwipeActionProps,
} from "@/components/index";
import { View, Button } from "@tarojs/components";
import styles from "./index.module.scss";

const defaultState = {
  className: undefined,
  style: undefined,
  rightNode: undefined,
  autoClose: true,
  isOpened: undefined,
  maxDistance: 0,
  moveRatio: 0.5,
};

class SwipeActionPage extends Component<IObject, SwipeActionProps> {
  constructor(props) {
    super(props);
    this.state = defaultState;
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
        pageNavProps={{ text: "swipeAction", showBack: true }}
      >
        <ShowProps
          list={[
            "className?: string;",
            "style?: CSSProperties;",
            "isOpened?: boolean; // 是否展示右侧操作块",
            "autoClose?: boolean; // 点击操作块是否自动关闭展示",
            "maxDistance?: number; // 操作块宽度（单位 px）",
            "moveRatio?: number; // 滑块滑动临界比例",
            "rightNode?: ReactNode; // 右侧滑块",
            "onOpened?: TBaseFun; // 滑块展示回调",
            "onClosed?: TBaseFun; // 滑块关闭回调",
            "onClick?: TBaseFun;",
          ]}
        />
        <SwipeAction
          {...this.state}
          rightNode={<View style={{ background: "red" }}>111</View>}
          style={{ margin: "20px 0px", height: 40 }}
        >
          自定义内容
        </SwipeAction>
        <Button onClick={() => this.setState({ maxDistance: 100 })}>
          maxDistance
        </Button>
        <Button onClick={() => this.setState({ isOpened: true })}>
          toOpen
        </Button>
        <Button onClick={() => this.setState({ isOpened: false })}>
          toClose
        </Button>
      </PageContainer>
    );
  }
}

export default SwipeActionPage;
