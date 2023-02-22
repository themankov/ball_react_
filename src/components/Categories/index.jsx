import CategoriesCard from '../CategoriesCard';
import style from './Categories.module.scss';
import { Link } from 'react-router-dom';
const cards = [
  {
    name: 'Баблбоксы',
    href: 'https://xn----8sbgvjdb4aec5ajeg0k.xn--p1ai/wp-content/uploads/2020/01/%D0%91%D0%B0%D0%B1%D0%BB-%D0%91%D0%BE%D0%BA%D1%81.jpg',
  },
  {
    name: 'Фонтаны с цифрами',
    href: 'https://content2.flowwow-images.com/data/flowers/1000x1000/99/1633357961_15259899.jpg',
  },
  {
    name: 'В Банке',
    href: 'https://sharik.ru/images/elements_big/1110-0002_m1.jpg',
  },
  {
    name: '3D Шары',
    href: 'https://zatey.ru/upload/iblock/6ab/vg7n2k1ow1ae4t36x9py7seiuneajj3y/rozovoe_zoloto_shar_3d_zvezda_64sm_sostavnaya_rose_gold_1209_0443.jpg',
  },
  {
    name: 'Пиньяты',
    href: 'https://zatey.ru/upload/iblock/809/x4muytqbx8ebj4o3wmamo0c48ybmmcgw/kotiki_pinyata_koshka_rozovaya_s_lentami_1507_2050.jpg',
  },
  {
    name: 'Аксессуары',
    href: 'https://zatey.ru/upload/iblock/dd9/masplr1dmk43862s4jw1z13obu177hnt/sredstvo_d_obrabotki_sharov_flyluxe_1l_1302_1265.jpg',
  },
];
const Categories = () => {
  return (
    <section className={style.categories}>
      <h1 className={style.heading}>Популярные категории</h1>

      <div className={style.cards}>
        {cards.map((item, index) => {
          return (
            <Link to="/catalog" state={`${index}state`}>
              <CategoriesCard {...item} index={index} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Categories;
