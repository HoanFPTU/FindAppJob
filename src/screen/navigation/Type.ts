import {} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {NAME_NAVIGATION} from '../common/Const';
import {RouteProp} from '@react-navigation/native';

export type RootParams = {
  Home: undefined;
  Detail: {
    employer_logo: string;
    job_country: string;
    job_publisher: string;
    job_highlights: {
      Qualifications: string[];
      Responsibilities: string[];
      Benefits: string[];
    };
    job_title: string;
  };
};
// TYPEcheck Push to new Page
export type PropStackDetail = NativeStackNavigationProp<
  RootParams,
  NAME_NAVIGATION.DETAIL
>;
// TypeCheck get param new page
export type PropsRouteDetail = RouteProp<RootParams, NAME_NAVIGATION.DETAIL>;

// export enum tabSelected {
//   DESC = 'Qualifications',
//   COMPANY = 'Responsibilities',
//   REVIEW = 'Benefits',
// }
export type PropsContent = {
  job_highlights: {
    Qualifications: string[];
    Benefits: string[];
    Responsibilities: string[];
  };
};
export type PropsToolbar = {
  url: string;
  job_country: string;
  job_publisher: string;
  job_title: string;
};
