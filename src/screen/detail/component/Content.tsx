import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {style} from '../styles/style';
import {PropsContent} from '../../navigation/Type';

export default function Content({job_highlights}: PropsContent) {
  const [valueSelected, setValueSelected] = useState(0);
  const _OnpressBtn = (value: number) => {
    setValueSelected(value);
  };
  var arrJob_highlights = [
    {
      name: 'Qualifications',
      content: job_highlights.Qualifications,
    },
    {
      name: 'Responsibilities',
      content: job_highlights.Responsibilities,
    },
    {
      name: 'Benefits',
      content: job_highlights.Benefits,
    },
  ];

  return (
    <ScrollView style={style.mt16}>
      <View style={style.containerContent}>
        <TouchableOpacity
          onPress={() => _OnpressBtn(0)}
          style={[
            style.btn,
            style.p16,
            valueSelected === 0 ? style.bgcSelected : null,
          ]}>
          <Text style={valueSelected === 0 ? style.textSelected : null}>
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _OnpressBtn(1)}
          style={[
            style.btn,
            style.p16,
            valueSelected === 1 ? style.bgcSelected : null,
          ]}>
          <Text style={valueSelected === 1 ? style.textSelected : null}>
            Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _OnpressBtn(2)}
          style={[
            style.btn,
            style.p16,
            valueSelected === 2 ? style.bgcSelected : null,
          ]}>
          <Text style={valueSelected === 2 ? style.textSelected : null}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          style.containerItemContent,
          style.mt16,
          style.ml16,
          style.mr16,
        ]}>
        <Text style={[style.itemTitle, style.mb16]}>
          {arrJob_highlights[valueSelected].name}
        </Text>
        {arrJob_highlights[valueSelected].content.map(
          (value: string, index) => {
            return <Text key={index}>{value}</Text>;
          },
        )}
      </View>
    </ScrollView>
  );
}
