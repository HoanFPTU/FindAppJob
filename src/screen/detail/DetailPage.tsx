import {View, Text} from 'react-native';
import React from 'react';
import ToolBar from './component/ToolBar';
import Content from './component/Content';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../navigation/Type';
import {ScrollView} from 'react-native-gesture-handler';
import Submit from './component/Submit';
import {style} from '../home/Style';

export default function DetailPage() {
  const items = useRoute<PropsRouteDetail>().params;

  return (
    <View style={style.containerDetaiPage}>
      <ScrollView>
        <ToolBar
          job_country={items?.job_country}
          job_title={items?.job_title}
          job_publisher={items?.job_publisher}
          url={items?.employer_logo}
        />
        <Content job_highlights={items?.job_highlights} />
      </ScrollView>
      <Submit />
    </View>
  );
}
