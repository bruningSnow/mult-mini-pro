import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';

import { connectState } from '../../models';
import './index.scss';

const Index = () => {
  const { example } = useSelector((state: connectState) => state.example);

  return (
    <View className="index">
      <Text>副包 -》 {example}</Text>
    </View>
  );
};

export default Index;
