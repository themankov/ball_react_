import axios from 'axios';

export async function getData(
  page,
  limit,

  selectedSort,
  categoryId,
  ...args
) {
  try {
    const sortByAscDesc = selectedSort.sortProperty.includes('-');

    let sortByParams = '';
    if (args.length > 0) {
      sortByParams = args;
    } else {
      sortByParams = selectedSort.sortProperty.replace('-', '');
    }
    const url = `https://63f0de4b5b7cf4107e284139.mockapi.io/ballons?&categoryId=${categoryId}&limit=${limit}&page=${page}&sortBy=${sortByParams}&completed=false${
      sortByAscDesc ? '&order=desc' : ''
    }`;

    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    alert(e);
  }
}
