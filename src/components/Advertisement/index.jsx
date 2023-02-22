import styles from './Advertisement.module.scss';
const Advertisement = () => {
  return (
    <>
      <div className={styles.margin_top}></div>
      <section className={styles.advertisement}>
        <p>
          <h1>Распродажа</h1>
          <h2>в честь нового года</h2>
        </p>
        <div className={styles.buttons}>
          <button>Все акции</button>
          <button>Подробнее</button>
        </div>
      </section>
    </>
  );
};
export default Advertisement;
