import axios from 'axios';

export const getImages = async (page, limit, topRated) => {
  let url = `https://63f0de4b5b7cf4107e284139.mockapi.io/example?limit=${limit}&page=${page}&sortBy=${topRated}`;
  const res = await axios.get(url);
  return res.data;
};
