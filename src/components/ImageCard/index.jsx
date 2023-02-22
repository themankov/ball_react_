import style from './ImageCard.module.scss';
const ImageCard = ({ data }) => {
  const { imageUrl } = data;
  return (
    <div className={style.image}>
      <img src={imageUrl} alt="work" />
    </div>
  );
};
export default ImageCard;
