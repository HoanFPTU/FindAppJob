import axios from 'axios';

type Params = {
  query: string;
  page: string;
  num_pages: string;
};
export const fetchPopularJob = (params: Params) => {
  const options = {
    params: {...params},
    headers: {
      'X-RapidAPI-Key': '7625e5c5cemsh53f65dc35fd4c31p160dcejsne0be66637dd4',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const url = 'https://jsearch.p.rapidapi.com/search';
  //   không return thẳng được chỗ này
  // axios.get(url, options).then(response => {
  //   console.log(response);
  // });
  return axios.get(url, options).then(res => {
    return res;
  });
};
