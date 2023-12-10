import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from '../styles/style';

export default function Submit() {
  const iconFavourite = require('../../../access/icons/favourite.png');
  return (
    <View
      style={[
        style.containerSubmit,
        style.ml16,
        style.mb16,
        style.mr16,
        style.mt16,
      ]}>
      <View style={[style.btn, style.p16]}>
        <Image source={iconFavourite} style={style.icon} />
      </View>
      <TouchableOpacity style={[style.btn, style.p16, style.btnApply]}>
        <Text style={style.textApply}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
}
