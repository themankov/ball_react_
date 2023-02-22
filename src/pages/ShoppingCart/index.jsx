import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearItems } from '../../store/slices/cartSlice';
import CartItem from './CartItem';
import style from './ShoppingCart.module.scss';
const ShoppingCart = () => {
  const totalSum = useSelector((state) => state.cartPage.totalSum);
  const items = useSelector((state) => state.cartPage.items);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [isSended, setIsSended] = useState(false);

  const itemsCount = items.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const selectedItems = useSelector((state) => state.cartPage.items);
  const sendPhone = () => {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!regex.test(inputRef.current.value)) {
      inputRef.current.style.borderColor = 'red';
      inputRef.current.style.borderWidth = '4px';
      return;
    }
    if (itemsCount < 1) return;
    setIsSended(true);
    inputRef.current.value = '';
    inputRef.current.style = '';
    dispatch(clearItems());
  };

  return (
    <section className={style.cart}>
      <h1>Корзина</h1>
      <Link to="/catalog">
        <div className={style.link}>Вернуться в магазин</div>
      </Link>
      <div className={style.cart_contain}>
        <div className={style.cart_wrapper}>
          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => {
              return (
                <>
                  <div className={style.line}></div>
                  <CartItem
                    name={item.name}
                    imageUrl={item.imageUrl}
                    Newprice={item.Newprice}
                    lastPrice={item.lastPrice}
                    id={item.id}
                  />
                </>
              );
            })
          ) : (
            <h1 className={style.heading}>
              {isSended
                ? 'Спасибо за заказ, наш менеджер скоро свяжется с вами'
                : 'Нет выбранных товаров'}
            </h1>
          )}
        </div>
        <div className={style.details}>
          <h1>Детали заказа</h1>
          <div className={style.number}>
            <span>Количество</span>
            <span>{itemsCount}</span>
          </div>
          <div className={style.summary}>
            <span>Сумма</span>
            <span>{totalSum}</span>
          </div>
          <input type="text" ref={inputRef} placeholder="Ваш номер телефона" />
          <button
            onClick={() => {
              sendPhone();
            }}
          >
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};
export default ShoppingCart;
