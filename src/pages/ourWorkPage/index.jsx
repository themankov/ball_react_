import Skeleton from './Skeleton';
import style from './ourWork.module.scss';
import { getImages } from './../../utils/getImages';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCountPage,
  changePageToDefault,
  setItems,
} from '../../store/slices/workSlice';
import { useInView } from 'react-intersection-observer';
const OurWorkPage = () => {
  const page = useSelector((state) => state.workPage.page);
  let dispatch = useDispatch();
  const isMounted = useRef();
  const NewPageRef = useRef(false);
  const items = useSelector((state) => state.workPage.Workitems);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      NewPageRef.current = true;
      let data = await getImages(page, 4, '');
      dispatch(setItems({ data, page }));
    }
    fetchData();
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Логика intersection Observer
  useEffect(() => {
    if (isMounted.current && inView && NewPageRef.current) {
      async function fetchData(page) {
        const data = await getImages(page, 4, '');

        dispatch(setItems({ data, page }));
        if (data.length < 4) {
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
    <section className={style.ourWork}>
      {items.length > 0
        ? items.map((item, index) => {
            return <img src={item.imageUrl} alt="cart" key={index} />;
          })
        : [...new Array(4)].map((item) => <Skeleton />)}
      <div className="intersection_observer" ref={ref}></div>
    </section>
  );
};
export default OurWorkPage;
