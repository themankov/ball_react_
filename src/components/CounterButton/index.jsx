import { useDispatch, useSelector } from 'react-redux';
import { minusItems, plusItems } from '../../store/slices/cartSlice';
import style from './CounterButton.module.scss';
const CounterButton = ({ id }) => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state.cartPage.items.find((item) => item.id === id).count
  );

  const minusItemsCart = (id) => {
    debugger;
    dispatch(minusItems(id));
  };
  const plusItemsCart = (id) => {
    debugger;
    dispatch(plusItems(id));
  };
  return (
    <div className={style.counter}>
      <svg
        onClick={() => minusItemsCart(id)}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="50.000000pt"
        height="50.000000pt"
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M90 250 c0 -19 7 -20 160 -20 153 0 160 1 160 20 0 19 -7 20 -160 20
-153 0 -160 -1 -160 -20z"
          />
        </g>
      </svg>

      {count}
      <svg
        onClick={() => plusItemsCart(id)}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="50.000000pt"
        height="50.000000pt"
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M230 340 l0 -70 -70 0 c-63 0 -70 -2 -70 -20 0 -18 7 -20 70 -20 l70
0 0 -70 c0 -63 2 -70 20 -70 18 0 20 7 20 70 l0 70 70 0 c63 0 70 2 70 20 0
18 -7 20 -70 20 l-70 0 0 70 c0 63 -2 70 -20 70 -18 0 -20 -7 -20 -70z"
          />
        </g>
      </svg>
    </div>
  );
};
export default CounterButton;
