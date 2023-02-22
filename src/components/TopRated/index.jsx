import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSaleItems } from '../../store/slices/mainPage';
import { getData } from '../../utils/getData';

import Card from '../Card';
import Skeleton from '../Card/Skeleton';
import style from './TopRated.module.scss';
const TopRated = () => {
  const dispatch = useDispatch();
  const salesCard = useSelector((state) => state.mainPage.Saleitems);
  const sort = useSelector((state) => state.sortPage.sort);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);
      const res = await getData(1, 4, sort, '', 'raiting');

      dispatch(setSaleItems(res));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={style.top_rated}>
      <div className={style.heading}>
        <h1>Лидеры продаж</h1>
        <span onClick={() => navigate(`/catalog?sortBy=raiting`)}>
          показать все
        </span>
      </div>
      <div className={style.card}>
        {salesCard.length > 0
          ? salesCard.map((item, index) => {
              return <Card data={item} index={index} key={item.id} />;
            })
          : [...new Array(4)].map((item, index) => {
              return <Skeleton />;
            })}
      </div>
    </section>
  );
};
export default TopRated;
