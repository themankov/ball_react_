import Sort from '../../components/Sort';
import SortCardWrapper from '../../components/SortCardWrapper';
import style from './FilterPage.module.scss';
const FilterPage = () => {
  return (
    <section className={style.filter}>
      <h1>Каталог</h1>
      <Sort />
      <SortCardWrapper />
    </section>
  );
};
export default FilterPage;
