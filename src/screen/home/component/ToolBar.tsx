import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';

export default function ToolBar() {
  const IconMenu = require('../../../access/icons/menu.png');
  const AVT = require('../../../access/icons/avt.png');
  return (
    <View style={[style.containerToolBar, style.bgWhite]}>
      <View style={style.toolbar}>
        <Image style={style.icon} source={IconMenu} />
        <Image style={style.avatar} source={AVT} />
      </View>
      <Text style={style.subtitle}>Hello Hoan</Text>
      <Text style={[style.title, style.mt8]}>Find Your Perfect Job</Text>
    </View>
  );
}
