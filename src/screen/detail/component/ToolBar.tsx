import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../styles/style';
import {useNavigation} from '@react-navigation/native';
import {PropStackDetail, PropsToolbar} from '../../navigation/Type';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ToolBar({
  url,
  job_country,
  job_publisher,
  job_title,
}: PropsToolbar) {
  const navigation = useNavigation<PropStackDetail>();
  const iconBack = require('../../../access/icons/goback.png');
  const iconShare = require('../../../access/icons/share.png');
  const iconFPT = require('../../../access/icons/fpt.jpg');
  const iconLocation = require('../../../access/icons/location.png');
  const onBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={[style.ml16, style.mr16]}>
      <View style={[style.containerToolBar, style.mb16, style.mt16]}>
        <TouchableOpacity onPress={onBack} style={style.btn}>
          <Image style={style.icon} source={iconBack} />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Image style={style.icon} source={iconShare} />
        </TouchableOpacity>
      </View>
      <View style={[style.containerHeader, style.mt16]}>
        <Image
          source={url == null ? iconFPT : {uri: url}}
          style={style.logoCompany}
        />
        <Text style={[style.titleJob, style.secondaryColor]}>{job_title}</Text>
        <View style={[style.containerLocation]}>
          <Text style={[style.fontBold, style.secondaryColor]}>
            {job_publisher}/
          </Text>
          <Image source={iconLocation} />
          <Text style={[style.secondaryColor]}>{job_country}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
