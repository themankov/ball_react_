import { useRef } from 'react';
import style from './ButtonToCart.module.scss';
const ButtonToCart = ({ SendedData }) => {
  const ButtonRef = useRef();
  const AddToCart = (e) => {
    e.preventDefault();
    SendedData();
    ButtonRef.current.style.backgroundColor = 'pink';
    ButtonRef.current.innerText = 'Спасибо за заказ!';
    setTimeout(() => {
      ButtonRef.current.style = '';
      ButtonRef.current.innerText = 'Добавить в корзину';
    }, 1000);
  };

  return (
    <button className={style.btn} ref={ButtonRef} onClick={(e) => AddToCart(e)}>
      Добавить в корзину
    </button>
  );
};
export default ButtonToCart;
