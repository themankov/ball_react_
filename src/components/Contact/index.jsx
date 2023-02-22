import style from './Contact.module.scss';
import photo from './../../assets/Contacts.png';
const Contact = () => {
  return (
    <section className={style.contact}>
      <div className={style.left}>
        <img src={photo} alt="photo_girl" />
      </div>
      <div className={style.right}>
        <h1>
          Скидка 5% <span>на первый заказ</span>
        </h1>
        <input type="text" placeholder="+7" />
        <button>Получить скидку</button>
      </div>
    </section>
  );
};
export default Contact;
