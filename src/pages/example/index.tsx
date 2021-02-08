import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';
import { connectState } from '@/models/index';

import useDispatchExample from './useDispatch';
import './index.scss';

const Index = () => {
  const { example } = useSelector((state: connectState) => state.exampleState);
  const { test, save } = useDispatchExample();

  useEffect(() => {
    save({ example: '666' });
    test('gggggg');
  }, []);

  return (
    <View className="index">
      <Text>Hello world! {example}</Text>
    </View>
  );
};

export default Index;
