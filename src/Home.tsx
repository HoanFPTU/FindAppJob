// import {Text, TouchableHighlight} from 'react-native';
// import React from 'react';
// import {PropsPara} from '../App';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// type PropsNavHome = NativeStackNavigationProp<PropsPara, 'Detail'>;
// // NativeStackNavigationProp nha ko phải scrreen
// type PropsRouteHome = RouteProp<PropsPara, 'Home'>;
// // check type Route để nó gợi ý đúng para cho trang Home
// // check type Nav để nó push cho đúng para tùy vào trang nó muốn chuyển tới
// export default function Home() {
//   const navigation = useNavigation<PropsNavHome>();
//   const route = useRoute<PropsRouteHome>();
//   const _onPress = () => {
//     navigation.push('Detail', {age: 18});
//   };
//   return (
//     <TouchableHighlight onPress={_onPress}>
//       <Text>{route.params.title}</Text>
//     </TouchableHighlight>
//   );
// }
