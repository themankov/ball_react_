import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiscount } from '../../utils/getDiscount';
import ButtonToCart from '../ButtonToCart';
import style from './Card.module.scss';
import { addItems } from '../../store/slices/cartSlice';
const Card = ({ data }) => {
  const { Newprice, lastPrice, name, imageUrl, id } = data;
  const dispatch = useDispatch();
  const SendedData = () => {
    const dataToSend = {
      id,
      imageUrl,
      name,
      Newprice,
      lastPrice,
    };
    debugger;
    dispatch(addItems(dataToSend));
  };
  return (
    <div className={style.card}>
      <Link to={`/${id}`}>
        <img src={imageUrl} alt="card" />
      </Link>

      <div className={style.prices}>
        <span>{Newprice}р</span>
        <span>{lastPrice}р</span>
        <span>{`-${getDiscount(Newprice, lastPrice)}%`}</span>
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.btn}>
        <ButtonToCart SendedData={SendedData} />
      </div>
    </div>
  );
};
export default Card;
