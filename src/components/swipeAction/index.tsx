import React, { useState, ReactNode, CSSProperties, useEffect } from "react";
import { View, MovableArea, MovableView } from "@tarojs/components";
import Classnames from "classnames";
import { uuid } from "@/utils/utils";

import styles from "./index.module.scss";

type TBaseFun = (e: Event) => void;

export interface SwipeActionProps {
  className?: string;
  style?: CSSProperties;
  isOpened?: boolean; // 是否展示右侧操作块
  autoClose?: boolean; // 点击操作块是否自动关闭展示
  maxDistance?: number; // 操作块宽度
  moveRatio?: number; // 滑块滑动临界比例
  rightNode?: ReactNode; // 右侧滑块
  onOpened?: TBaseFun; // 滑块展示回调
  onClosed?: TBaseFun; // 滑块关闭回调
  onClick?: TBaseFun;
}

export const SwipeAction: React.FC<SwipeActionProps> = (props) => {
  const {
    className,
    style,
    maxDistance = 0,
    rightNode,
    onOpened,
    onClosed,
    onClick,
    autoClose,
    isOpened,
    moveRatio = 0.5,
  } = props;
  const componentId = uuid();
  const [_isOpened, set_isOpened] = useState<boolean>(false);
  const [offsetSize, setOffsetSize] = useState<any>(0);
  const [moveX, setMoveX] = useState<any>();
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    const innerIsOpen = !!isOpened;
    const distance = innerIsOpen ? -Math.abs(maxDistance) : 0;

    set_isOpened(innerIsOpen);
    setMoveX(distance);
    setOffsetSize(distance);
  }, [isOpened, maxDistance]);

  const _reset = (isOpenedParam) => {
    set_isOpened(isOpenedParam);
    setOffsetSize(moveX);
    setResetCount(resetCount + 1);
  };

  useEffect(() => {
    setOffsetSize(_isOpened ? -maxDistance : 0);
  }, [resetCount, _isOpened, maxDistance]);

  const handleOpened = (event) => {
    if (typeof onOpened === "function") {
      onOpened(event);
    }
  };

  const handleClosed = (event) => {
    if (typeof onClosed === "function") {
      onClosed(event);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (autoClose) {
      _reset(false); // TODO: Check behavior
      handleClosed(e);
    }
  };

  const onTouchEnd = (e) => {
    if (moveX === -maxDistance) {
      _reset(true);
      handleOpened(e);
      return;
    }
    if (moveX === 0) {
      _reset(false);
      handleClosed(e);
      return;
    }
    if (_isOpened && moveX < 0) {
      _reset(false);
      handleClosed(e);
      return;
    }
    if (Math.abs(moveX) < maxDistance * moveRatio) {
      _reset(false);
      handleClosed(e);
    } else {
      _reset(true);
      handleOpened(e);
    }
  };

  const onChange = (e) => {
    setMoveX(e.detail.x);
  };

  return (
    <View
      className={Classnames(styles["swipe-action"], className)}
      style={style}
      id={`swipeAction-${componentId}`}
      onClick={onClick as any}
    >
      <MovableArea
        className="swipe-action__area"
        style={{
          width: `calc(100% + ${maxDistance}px)`,
          transform: `translate(-${maxDistance}px, 0)`,
        }}
      >
        <MovableView
          className="swipe-action__content"
          style={{
            width: `calc(100% - ${maxDistance}px)`,
            left: `${maxDistance}px`,
          }}
          direction="horizontal"
          damping={50}
          x={offsetSize}
          onTouchEnd={onTouchEnd}
          onChange={onChange}
        >
          {props.children}
          <View
            className="swipe-action__options"
            style={{
              width: `${maxDistance}px`,
              transform: `translate(${maxDistance}px, 0)`,
            }}
            onClick={handleClick as any}
          >
            {rightNode}
          </View>
        </MovableView>
      </MovableArea>
    </View>
  );
};

export default SwipeAction;
