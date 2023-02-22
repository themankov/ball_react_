import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../store/slices/sortSlice';
import style from './Sort.module.scss';
export const sortedArr = [
  { name: 'популярности ASC', sortProperty: 'raiting' },
  { name: 'популярности DESC', sortProperty: '-raiting' },
  { name: 'цене ASC', sortProperty: 'Newprice' },
  { name: 'цене DESC', sortProperty: '-Newprice' },
  { name: 'алфавиту ASC', sortProperty: 'name' },
  { name: 'алфавиту DESC', sortProperty: '-name' },
];
const Sort = () => {
  const [isShown, setIsShown] = useState(false);
  const value = useSelector((state) => state.sortPage.sort.name);
  const dispatch = useDispatch();
  const sortRef = useRef(null);
  const choiceSelectedItem = (idx) => {
    dispatch(setSort(sortedArr[idx]));
    setIsShown(false);
  };
  useEffect(() => {
    const handlers = (e) => {
      if (e.target !== sortRef.current) setIsShown(false);
    };
    document.body.addEventListener('click', handlers);
    return () => {
      document.body.removeEventListener('click', handlers);
    };
  });
  return (
    <div className={style.sort}>
      <div className={style.sortBy}>
        <h1>Сортировать по:</h1>
        <div className={style.choice}>
          <span ref={sortRef} onClick={() => setIsShown(true)}>
            {value}
          </span>
          {isShown && (
            <ul className={style.sortBy_value}>
              {sortedArr.map((item, index) => {
                return (
                  <li onClick={() => choiceSelectedItem(index)} key={index}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sort;
