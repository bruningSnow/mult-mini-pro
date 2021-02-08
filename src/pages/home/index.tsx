import React from 'react';
import { View, Image, ScrollView } from '@tarojs/components';

import { ImageList } from './const';
import styles from './index.scss';

const Index = () => {
  const imageItem = (img) => (
    <View className={styles.imageItem}>
      <Image src={img}  className={styles.img}/>
    </View>
  );
  return (
    <ScrollView id="scroll" className={styles.scrollview} scrollY={true}>
      {ImageList.map((image) => imageItem(image))}
    </ScrollView>
  );
};

export default Index;
