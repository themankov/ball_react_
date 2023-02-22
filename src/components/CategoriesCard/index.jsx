import style from './CardItem.module.scss';
const CardItem = ({ href, name, index }) => {
  return (
    <div className={style.card}>
      <img src={href} alt="card" />
      <h1 className={style.heading}>{name}</h1>
    </div>
  );
};
export default CardItem;
