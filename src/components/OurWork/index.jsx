import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setWorkItems } from '../../store/slices/mainPage';
import { getImages } from '../../utils/getImages';
import ImageCard from '../ImageCard';
import style from './OurWork.module.scss';
const OurWork = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const WorkItem = useSelector((state) => state.mainPage.WorkItems);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const res = await getImages(1, 4);

      dispatch(setWorkItems(res));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={style.our_work}>
      <div className={style.heading}>
        <h1>Наши работы</h1>
        <span onClick={() => navigation('/ourWork')}>показать все</span>
      </div>
      <div className={style.card}>
        {WorkItem.length > 0
          ? WorkItem.map((item, index) => {
              return <ImageCard data={item} key={item.id} />;
            })
          : ''}
      </div>
    </section>
  );
};
export default OurWork;
