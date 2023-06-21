import { Component } from "react";
import {
  PageContainer,
  ActionSheet,
  ShowProps,
  ActionSheetProps,
} from "@/components/index";
import { View, Button } from "@tarojs/components";
import styles from "./index.module.scss";

class ActionSheetPage extends Component<IObject, ActionSheetProps> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onShareAppMessage() {
    return {
      title: "郝兜兜的组件库",
      path: "/subpackages/actionSheet/index",
    };
  }

  onShareTimeline() {
    return {
      text: "郝兜兜的组件库",
      pagePath: "/subpackages/actionSheet/index",
    };
  }

  render() {
    return (
      <PageContainer
        className={styles.index}
        pageNavProps={{ text: "actionSheet", showBack: true }}
      >
        <ShowProps
          list={[
            "className?: string;",
            "style?: CSSProperties;",
            "visible?: boolean; // 是否展示下拉弹窗",
            "contentStyle?: CSSProperties; // 弹窗内容样式",
            'contentHeight?: CSSProperties["height"]; // 弹窗内容高度',
            "onClose?: TBaseFun; // 滑块关闭回调",
            "/**",
            " * 注意，当为 scroll-view 内部元素时，z-index 失效",
            " * 链接：https://developers.weixin.qq.com/community/develop/doc/0008ec653dcdc0eed419f70e751400?highLine=z-index%2520%25E5%25A4%25B1%25E6%2595%2588",
            " */",
          ]}
        />
        <Button
          className="operator-button"
          onClick={() => this.setState({ visible: true })}
        >
          开启
        </Button>
        <View></View>
        <ActionSheet
          {...this.state}
          contentHeight="400rpx"
          onClose={() => this.setState({ visible: false })}
        >
          自定义内容
        </ActionSheet>
      </PageContainer>
    );
  }
}

export default ActionSheetPage;
