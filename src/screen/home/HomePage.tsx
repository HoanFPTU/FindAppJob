import {View} from 'react-native';
import React from 'react';
import ToolBar from './component/ToolBar';
import Search from './component/Search';
import PopularJob from './component/PopularJob';
import Nearby from './component/Nearby';
import {style} from './Style';

export default function HomePage() {
  return (
    <View style={style.bgGray}>
      <ToolBar />
      <Search />
      <PopularJob />
      <Nearby />
    </View>
  );
}
