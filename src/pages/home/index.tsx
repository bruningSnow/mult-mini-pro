import React, { useState } from 'react';
import { AtCurtain } from 'taro-ui';
import { View, Image, ScrollView, Text } from '@tarojs/components';

import { ImageList } from './const';
import './index.scss';

const Index = () => {
  const [isCurtainOpened, setIsCurtainOpened] = useState(false);
  const [curtainImg, setCurtainImg] = useState('');

  const openImage = (img) => {
    setIsCurtainOpened(true);
    setCurtainImg(img);
  };

  const imageItem = (imageConfig) => (
    <View className="imageItem" style={imageConfig.style}>
      <View className="imgContainer">
        <Image
          onClick={() => openImage(imageConfig.img)}
          src={imageConfig.img}
          className="img"
          mode={'aspectFit'}
        />
      </View>
      <Text className="text">{imageConfig.text}</Text>
      {imageConfig.title && <Text className="title" style={imageConfig.titleStyle}>{imageConfig.title}</Text>}
    </View>
  );

  const imageItems = (imagesConfig) => (
    <View className="imageItems">
      {imagesConfig.map((imageConfig) => imageItem(imageConfig))}
    </View>
  );

  const imagePre = (
    <AtCurtain
      isOpened={isCurtainOpened}
      closeBtnPosition={'bottom'}
      onClose={() => setIsCurtainOpened(false)}
    >
      <View
        style="position:fixed;top:0px;left:0px;width:100vw;height:100vh;z-index:9999;background: rgba(0, 0, 0, 0.9);"
        onClick={() => setIsCurtainOpened(false)}
      >
        <Image className="curtain-weapp" src={curtainImg} mode={'widthFix'} />
      </View>
    </AtCurtain>
  );

  return (
    <View>
      <ScrollView id="scroll" className="scrollview" scrollY={true}>
        {ImageList.map((imagesConfig) => imageItems(imagesConfig))}
      </ScrollView>
      {imagePre}
    </View>
  );
};

export default Index;
