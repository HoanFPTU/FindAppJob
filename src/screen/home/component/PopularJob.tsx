import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {FlatList} from 'react-native-gesture-handler';
import {fetchPopularJob} from '../../../api/RapidApi';
import {useNavigation} from '@react-navigation/native';
import {NAME_NAVIGATION} from '../../common/Const';
import {PropStackDetail} from '../../navigation/Type';

export default function PopularJob() {
  const [dataApi, setDataApi] = useState();
  const params = {
    query: 'java',
    page: '1',
    num_pages: '12',
  };
  const navigation = useNavigation<PropStackDetail>();

  useEffect(() => {
    fetchPopularJob(params).then(response => {
      console.log(response.data.data);
      setDataApi(response.data.data);
    });
  }, []);
  const onPressItem = (item: any) => {
    console.log('oke');
    navigation.push(NAME_NAVIGATION.DETAIL, item);
  };
  // const arrayItemJob = [
  //   {
  //     employer_name: 'Dice',
  //     employer_logo:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0',
  //     employer_website: null,
  //     employer_company_type: 'Information',
  //     job_publisher: 'LinkedIn',
  //     job_id: '8yv3oA_2-UYAAAAAAAAAAA==',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'Web Developer - 6-month Contract - Houston Hybrid',
  //     job_apply_link:
  //       'https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5805,
  //     job_description:
  //       'An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid',
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1685653019,
  //     job_posted_at_datetime_utc: '2023-06-01T20:56:59.000Z',
  //     job_city: 'Houston',
  //     job_state: 'TX',
  //     job_country: 'US',
  //     job_latitude: 29.760427,
  //     job_longitude: -95.369804,
  //     job_benefits: null,
  //     job_google_link:
  //       'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2023-07-01T20:56:59.000Z',
  //     job_offer_expiration_timestamp: 1688245019,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false,
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: true,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false,
  //       job_experience_in_place_of_education: false,
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: {
  //       Qualifications: [
  //         'JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API',
  //       ],
  //       Responsibilities: [
  //         'Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors',
  //         'This role is hybrid and you will be required to go in to the office 3 days p/w',
  //       ],
  //       Benefits: [
  //         '6-month contract (likely extension)',
  //         'W2 - $70 - $75 p/h',
  //         'C2C - $80 - $90 p/h',
  //       ],
  //     },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_naics_code: '519130',
  //     job_naics_name:
  //       'Internet Publishing and Broadcasting and Web Search Portals',
  //   },
  //   {
  //     employer_name: 'Dice',
  //     employer_logo:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0',
  //     employer_website: null,
  //     employer_company_type: 'Information',
  //     job_publisher: 'LinkedIn',
  //     job_id: '8yv3oA_2-UYAAAAAAAAAAA==',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'Web Developer - 6-month Contract - Houston Hybrid',
  //     job_apply_link:
  //       'https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5805,
  //     job_description:
  //       'An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid',
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1685653019,
  //     job_posted_at_datetime_utc: '2023-06-01T20:56:59.000Z',
  //     job_city: 'Houston',
  //     job_state: 'TX',
  //     job_country: 'US',
  //     job_latitude: 29.760427,
  //     job_longitude: -95.369804,
  //     job_benefits: null,
  //     job_google_link:
  //       'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2023-07-01T20:56:59.000Z',
  //     job_offer_expiration_timestamp: 1688245019,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false,
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: true,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false,
  //       job_experience_in_place_of_education: false,
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: {
  //       Qualifications: [
  //         'JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API',
  //       ],
  //       Responsibilities: [
  //         'Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors',
  //         'This role is hybrid and you will be required to go in to the office 3 days p/w',
  //       ],
  //       Benefits: [
  //         '6-month contract (likely extension)',
  //         'W2 - $70 - $75 p/h',
  //         'C2C - $80 - $90 p/h',
  //       ],
  //     },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_naics_code: '519130',
  //     job_naics_name:
  //       'Internet Publishing and Broadcasting and Web Search Portals',
  //   },
  //   {
  //     employer_name: 'Dice',
  //     employer_logo:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0',
  //     employer_website: null,
  //     employer_company_type: 'Information',
  //     job_publisher: 'LinkedIn',
  //     job_id: '8yv3oA_2-UYAAAAAAAAAAA==',
  //     job_employment_type: 'CONTRACTOR',
  //     job_title: 'Web Developer - 6-month Contract - Houston Hybrid',
  //     job_apply_link:
  //       'https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671',
  //     job_apply_is_direct: false,
  //     job_apply_quality_score: 0.5805,
  //     job_description:
  //       'An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid',
  //     job_is_remote: true,
  //     job_posted_at_timestamp: 1685653019,
  //     job_posted_at_datetime_utc: '2023-06-01T20:56:59.000Z',
  //     job_city: 'Houston',
  //     job_state: 'TX',
  //     job_country: 'US',
  //     job_latitude: 29.760427,
  //     job_longitude: -95.369804,
  //     job_benefits: null,
  //     job_google_link:
  //       'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D',
  //     job_offer_expiration_datetime_utc: '2023-07-01T20:56:59.000Z',
  //     job_offer_expiration_timestamp: 1688245019,
  //     job_required_experience: {
  //       no_experience_required: false,
  //       required_experience_in_months: null,
  //       experience_mentioned: true,
  //       experience_preferred: false,
  //     },
  //     job_required_skills: null,
  //     job_required_education: {
  //       postgraduate_degree: false,
  //       professional_certification: false,
  //       high_school: false,
  //       associates_degree: false,
  //       bachelors_degree: true,
  //       degree_mentioned: false,
  //       degree_preferred: false,
  //       professional_certification_mentioned: false,
  //       job_experience_in_place_of_education: false,
  //     },
  //     job_experience_in_place_of_education: false,
  //     job_min_salary: null,
  //     job_max_salary: null,
  //     job_salary_currency: null,
  //     job_salary_period: null,
  //     job_highlights: {
  //       Qualifications: [
  //         'JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API',
  //       ],
  //       Responsibilities: [
  //         'Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors',
  //         'This role is hybrid and you will be required to go in to the office 3 days p/w',
  //       ],
  //       Benefits: [
  //         '6-month contract (likely extension)',
  //         'W2 - $70 - $75 p/h',
  //         'C2C - $80 - $90 p/h',
  //       ],
  //     },
  //     job_job_title: null,
  //     job_posting_language: 'en',
  //     job_onet_soc: '15113400',
  //     job_onet_job_zone: '3',
  //     job_naics_code: '519130',
  //     job_naics_name:
  //       'Internet Publishing and Broadcasting and Web Search Portals',
  //   },
  // ];
  const iconLogo = require('../../../access/icons/fpt.jpg');
  return (
    <View style={[style.mt16]}>
      <View style={[style.containerPopular, style.mb8]}>
        <Text style={[style.black, style.titlePopular]}>Popular jobs</Text>
        <Text>Show all</Text>
      </View>
      <FlatList
        horizontal
        data={dataApi}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onPressItem(item)}
            style={[
              style.p16,
              style.bgWhite,
              style.br8,
              style.w250,
              index == 0 ? null : style.ml24,
            ]}>
            <View style={[style.btn, style.bgGray]}>
              <Image
                source={
                  item.employer_logo === null
                    ? iconLogo
                    : {uri: item.employer_logo}
                }
                style={style.icon}
              />
            </View>
            <Text style={[style.titleItemPopular, style.mt8]}>
              {item.employer_name}
            </Text>
            <Text style={[style.positionItemPopular, style.mt16]}>
              {item.job_title}
            </Text>
            <Text style={[style.locationItemPopular]}>{item.country}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
