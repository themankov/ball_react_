import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItems } from '../../store/slices/cartSlice';
import { getDiscount } from '../../utils/getDiscount';
import style from './CardPage.module.scss';
const CardPage = () => {
  const { id } = useParams();
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.sortPage.items);

  const { name, imageUrl, Newprice, lastPrice, compound, filling } = items.find(
    (item, index) => {
      return String(item.id) === String(id);
    }
  );
  const dataToSend = () => {
    const data = {
      id,
      name,
      imageUrl,
      Newprice,
      lastPrice,
    };
    dispatch(addItems(data));
    buttonRef.current.style.backgroundColor = 'red';
    buttonRef.current.innerText = 'Спасибо за заказ!';
    setTimeout(() => {
      buttonRef.current.style = '';
      buttonRef.current.innerText = 'В корзину';
    }, 1000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={style.card}>
      <h1>{name}</h1>
      <div className={style.card_wrapper}>
        <div className={style.composition}>
          <img src={imageUrl} alt="card" />
        </div>
        <div className={style.description}>
          <div className={style.prices}>
            <span>{Newprice}р</span>
            <span>{lastPrice}р</span>
            <span>{`-${getDiscount(Newprice, lastPrice)}%`}</span>
          </div>
          <button onClick={() => dataToSend()} ref={buttonRef}>
            В корзину
          </button>
          <hr />
          <div className={style.contains}>
            <h1>Состав:</h1>
            <ul>
              {compound.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className={style.filling}>
            <h1>Внутри:</h1>
            <span>{filling}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardPage;
