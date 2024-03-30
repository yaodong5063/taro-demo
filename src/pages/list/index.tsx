import React from 'react';
import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { getModelCode } from '@/services/common';
import styles from './index.module.scss';

export default function Index() {
  useLoad(() => {
    getModelCode().then(({ code, data }) => {
      console.log(code, data);
    });
  });
  return (
    <View className={styles.index}>
      <Text>Hello world!</Text>
      <Text>这是一个demo页面</Text>
    </View>
  );
}
