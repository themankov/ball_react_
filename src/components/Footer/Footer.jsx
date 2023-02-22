import inst from './../../assets/instagram.svg';
import whats from './../../assets/whatsapp.svg';
import style from './Footer.module.scss';
const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.contacts}>
        <h1 className={style.heading}>Контакты</h1>
        <a href="tel:+79183465747">+7 918 574 44 47</a>
        <ul className="social_media">
          <li>
            <a href="http://instagram/">
              <img src={inst} alt="instagram" />
            </a>
            <h1>Instagram</h1>
          </li>
          <li>
            <a href="http://whatsapp/">
              <img src={whats} alt="whatsapp" />
            </a>
            <h1>Whatsapp</h1>
          </li>
        </ul>
      </div>
      <div className={style.address}>
        <h1 className={style.heading}>Адрес</h1>
        <h1 className={style.sub_heading}>Заветный проезд Лазурный, д.11</h1>
        <p>
          <span>Режим работы</span>
          <span>Круглосуточно</span>
        </p>
      </div>
    </section>
  );
};
export default Footer;
