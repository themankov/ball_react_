import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import style from './SortCardWrapper.module.scss';
import { getData } from '../../utils/getData';
import {
  changeCategories,
  changeCountPage,
  changePageToDefault,
  setItems,
  setSort,
} from '../../store/slices/sortSlice';
import Card from '../Card';
import Skeleton from '../Card/Skeleton';
import useDebounce from '../../hooks/useDebounce';

import { FetchData } from '../../api/FetchData';
import { sortedArr } from '../Sort';

const SortCardWrapper = () => {
  const NewPageRef = useRef(true);
  const isMounted = useRef(false);

  const page = useSelector((state) => state.sortPage.page);
  const navigation = useNavigate();
  const inputValue = useSelector((state) => state.sortPage.inputValue);

  const sort = useSelector((state) => state.sortPage.sort);
  const debouncedInputValue = useDebounce(inputValue, 1000);
  const items = useSelector((state) => state.sortPage.items);
  const dispatch = useDispatch();
  let { state } = useLocation();

  let categoryId = useSelector((state) => state.sortPage.categoryId);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search);

      let searchItem = sortedArr.find(
        (item) => item.sortProperty === params['?sortBy']
      );

      //если параметров больше, есть смысл сначала ...params, а потом переопределить sort кака объект

      dispatch(setSort(searchItem));
    }
    return () => {
      dispatch(changeCategories(''));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      let queryString = qs.stringify({
        sortBy: sort.sortProperty,
      });
      debugger;
      navigation(`?${queryString}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort.sortProperty]);
  //Первый рендер и при каждом изменении сортировки
  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      NewPageRef.current = true;
      debugger;
      const data = await FetchData(state, categoryId, page, 8, sort);
      dispatch(setItems({ data, page }));
      dispatch(changePageToDefault());
      isMounted.current = true;
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort.name, categoryId]);
  //Логика intersection Observer
  useEffect(() => {
    if (isMounted.current && inView && NewPageRef.current) {
      async function fetchData(page) {
        const data = await FetchData(state, categoryId, page, 8, sort);

        dispatch(setItems({ data, page }));
        if (data.length < 8) {
          NewPageRef.current = false;
          dispatch(changePageToDefault());
          return;
        }

        dispatch(changeCountPage());
      }
      fetchData(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <section className={style.sortCard}>
        {items.length > 0
          ? items
              .filter((item, index) => {
                if (
                  item.name
                    .toLowerCase()
                    .indexOf(debouncedInputValue.toLowerCase()) > -1
                ) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((item, index) => {
                return <Card data={item} key={item.id} />;
              })
          : [...new Array(8)].map((item, index) => {
              return <Skeleton key={index} />;
            })}
      </section>
      <div className="intersection-observer" ref={ref}></div>
    </>
  );
};
export default SortCardWrapper;
