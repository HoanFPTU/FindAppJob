import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {style} from '../Style';

export default function Search() {
  const iconSearch = require('../../../access/icons/search.png');
  var contentSearch = [
    {
      title: 'Full-time',
      isCheck: true,
    },
    {
      title: 'Part-time',
      isCheck: false,
    },
    {
      title: 'Contractor',
      isCheck: false,
    },
  ];
  const [filterContent, setFilterContent] = useState(contentSearch);
  const filterPress = (title: string) => {
    const newContentSearch = filterContent.map(item => {
      if (item.title === title) {
        item.isCheck = true;
      } else item.isCheck = false;
      return item;
    });
    setFilterContent(newContentSearch);
  };
  // trong function ko được khai báo function nhưng được khai báo arrow function
  const renderFilter = () =>
    filterContent.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[style.btnFilter, item.isCheck ? null : style.visible]}
          onPress={() => filterPress(item.title)}>
          <Text
            style={
              (style.textBtnFilter, item.isCheck ? null : style.textvisible)
            }>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });

  return (
    <View style={[style.bgWhite, style.pb16, style.br8]}>
      {/* search */}
      <View style={style.containerSearch}>
        <TextInput
          placeholder="Where are you looking for ?"
          style={style.inputSearch}
        />
        <TouchableOpacity style={style.btn}>
          <Image source={iconSearch} style={style.icon} />
          {/* chỗ image phải set heigh vs width chứ ko lên trên 
     giao diện khác nó bị vỡ tè le */}
        </TouchableOpacity>
      </View>
      {/* Fillter */}
      <View style={style.containerFilter}>
        {/* Btn có text ko nên quy định width vs heigh */}
        {renderFilter()}

        {/* <TouchableOpacity style={style.btnFilter}>
          <Text style={style.textBtnFilter}>Full-time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.btnFilter, style.visible]}>
          <Text style={[style.textBtnFilter, style.textvisible]}>
            Part-time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.btnFilter, style.visible]}>
          <Text style={[style.textBtnFilter, style.textvisible]}>
            Contactor
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
