import Taro from '@tarojs/taro';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';

import { connectState } from '../../models';
import useDispatchExample from './useDispatch';
import './index.scss';

const Index = () => {
  const { example } = useSelector((state: connectState) => state.example);
  const { test, save } = useDispatchExample();

  useEffect(() => {
    save({ example: 'Hello world! ' });
    test('666');
  }, []);

  return (
    <View className="index">
      <Text>{example}</Text>
      <View onClick={() => Taro.navigateTo({ url: '/subPages/example/index' })}>
        点我
      </View>
    </View>
  );
};

export default Index;
