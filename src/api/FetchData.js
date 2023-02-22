import { getData } from '../utils/getData';

export const FetchData = async (state, categoryId, page, limit, sort) => {
  let category;
  debugger;

  if (state) {
    category = state[0];
  } else {
    category = categoryId;
  }

  const data = await getData(page, limit, sort, category);
  return data;
};
