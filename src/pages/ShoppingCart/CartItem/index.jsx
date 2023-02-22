import CounterButton from '../../../components/CounterButton';
import style from './CartItem.module.scss';
const CartItem = ({ name, imageUrl, Newprice, lastPrice, count, id }) => {
  return (
    <div className={style.cartItem}>
      <img src={imageUrl} alt="cart" />
      <div className={style.characteristics}>
        <h1>{name}</h1>
        <CounterButton id={id} />
      </div>
      <div className={style.prices}>
        <span>{Newprice}</span>
        <span>{lastPrice}</span>
      </div>
    </div>
  );
};
export default CartItem;
