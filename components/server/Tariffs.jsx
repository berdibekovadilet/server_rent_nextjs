import Image from "next/image";
import tarifImage from "/public/assets/tarifServer.svg";
import Title from "../Title";
import styles from "/styles/server/Tariffs.module.scss";

const Tariffs = () => {
  return (
    <section className={styles.container} id="tarif">
      <Title>Тарифы</Title>
      <div className={styles.row}>
        <div className={styles.tarifOne}>
          <div className={styles.wrapper}>
            <h3>Популярный</h3>
            <p>Отлично подходит под 1С</p>
            <ul>
              <li>4 ядра</li>
              <li>6гб RAM</li>
              <li>SSD 128гб</li>
              <li>до 300МБит/с</li>
              <li>+UPS, Генератор</li>
              <li>Техподдержка 24/7/365</li>
            </ul>
            <a
              href="https://wa.me/+996552282553"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.priceContainerBlue}>
                <span className={styles.oldPrice}>7500</span>
                <span className={styles.price}>5000 сом</span>
              </div>
            </a>
          </div>
          <div className={styles.imgContainer}>
            <Image src={tarifImage} alt="tarifImage" />
          </div>
        </div>
        <div className={styles.tarifTwo}>
          <h3>Премиум</h3>
          <p>Подходит под проекты любой сложности</p>
          <ul>
            <li>8 ядер</li>
            <li>12гб RAM</li>
            <li>SSD 300гб</li>
            <li>до 300МБит/с</li>
            <li>+UPS, Генератор</li>
            <li>Техподдержка 24/7/365</li>
          </ul>
          <a
            href="https://wa.me/+996552282553"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={styles.priceContainerWhite}>
              <span className={styles.oldPrice}>16900</span>
              <span className={styles.price}>11900 сом</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
