import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {FlatList} from 'react-native-gesture-handler';
import {fetchPopularJob} from '../../../api/RapidApi';

export default function Nearby() {
  const [dataApi, setDataApi] = useState();
  const params = {
    query: 'java',
    page: '1',
    num_pages: '12',
  };
  useEffect(() => {
    fetchPopularJob(params).then(response => {
      setDataApi(response.data.data);
    });
  }, []);
  // const arrayItem = [
  //   {
  //     image: require('../../../access/icons/fpt.jpg'),
  //     title: 'React Developer',
  //     type: 'Full-time',
  //   },
  //   {
  //     image: require('../../../access/icons/fpt.jpg'),
  //     title: 'Java Developer',
  //     type: 'Part-time',
  //   },
  //   {
  //     image: require('../../../access/icons/fpt.jpg'),
  //     title: 'React Native Developer',
  //     type: 'Contraction',
  //   },
  //   {
  //     image: require('../../../access/icons/fpt.jpg'),
  //     title: 'React Native Developer',
  //     type: 'Contraction',
  //   },
  // ];
  const iconLogo = require('../../../access/icons/fpt.jpg');
  const renderItem = (item: any) => (
    <View style={[style.containerItemNearBy, style.p16]}>
      <View style={[style.btn, style.bgGray]}>
        <Image
          source={
            item.employer_logo === null ? iconLogo : {uri: item.employer_logo}
          }
          style={style.icon}
        />
      </View>
      <View style={style.ml8}>
        <Text style={[style.titleItemNearBy, style.black]}>
          {item.job_title}
        </Text>
        <Text style={style.mt8}> {item.employer_company_type}</Text>
      </View>
    </View>
  );

  return (
    <View style={[style.mt32]}>
      <View style={[style.containerPopular, style.mb8]}>
        <Text style={[style.black, style.titlePopular]}>Nearby jobs</Text>
        <Text>Show all</Text>
      </View>
      <FlatList
        style={[{height: 250}, style.bgWhite, style.br8]}
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
        scrollEnabled
      />
    </View>
  );
}
