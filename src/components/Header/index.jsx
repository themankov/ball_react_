import style from './Header.module.scss';
import logo from './../../assets/logo.svg';
import card from './../../assets/Card.svg';
import instagram from './../../assets/instagram.svg';
import whatsapp from './../../assets/whatsapp.svg';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategories, setInputValue } from '../../store/slices/sortSlice';
import burger from './../../assets/burger.svg';
import { useEffect, useRef, useState } from 'react';

const navMenu = [
  'Баблбоксы',
  'Фонтаны с цифрами',
  'В Банке',
  '3D шары',
  'Пиньяты',
  'Аксессуары',
];

const Header = () => {
  const [showAMenu, setShowMenu] = useState(false);
  const crossRef = useRef();
  const dispatch = useDispatch();
  const visited = useSelector((state) => state.sortPage.categoryId);
  const inputValue = useSelector((state) => state.sortPage.inputValue);
  const showMenu = () => {
    setShowMenu(!showAMenu);
    if (showAMenu) {
      crossRef.current.style.display = 'flex';
    } else {
      crossRef.current.style.display = 'none';
    }
  };

  return (
    <header className={style.header}>
      <div className={style.first_row}>
        <div className={style.header__search_section}>
          <Link to="/" className={style.header__logo}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/catalog">
            <button className={style.header__catalog}>Каталог</button>
          </Link>

          <input
            type="text"
            className={style.input}
            placeholder="Поиск"
            value={inputValue}
            onChange={(e) => {
              dispatch(setInputValue(e.target.value));
            }}
          />
        </div>
        <nav className={style.header__navbar}>
          <ul ref={crossRef}>
            <li>Акции</li>
            <li>Доставка</li>
            <li>Контакты</li>
          </ul>
          <div className={style.hamburger_menu}>
            <img src={burger} alt="burger" onClick={() => showMenu()} />
          </div>
          <Link to="/card">
            <img src={card} alt="card" className={style.header__card} />
          </Link>
        </nav>
      </div>
      <div className={style.overflow}>
        <div className={style.second_row}>
          <ul className={style.categories_item}>
            {navMenu.map((item, index) => {
              return (
                <NavLink
                  to="/catalog
              "
                >
                  <li
                    className={`${index === visited ? `${style.active}` : ''}`}
                    onClick={() => dispatch(changeCategories(index))}
                  >
                    {item}
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <div className={style.contacts}>
            <a href="tel:+7 861 204 24 46">+7 861 204 24 46</a>
            <ul className="social_media">
              <li className="social_media_icons">
                <a href="inst">
                  <img src={instagram} alt="inst_icon" />
                </a>
              </li>
              <li className="social_media_icons">
                <a href="whats">
                  <img src={whatsapp} alt="whats_icon" />
                </a>
              </li>
            </ul>
            <div className={style.work_time}>
              Режим работы <div>Круглосуточно</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
