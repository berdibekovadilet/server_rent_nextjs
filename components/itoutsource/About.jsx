import styles from "/styles/itoutsource/About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>
          Приходящий системный администратор для обслуживания вашего бизнеса
        </h2>
        <div className={styles.row}>
          <div className={styles.card}>
            <Image
              src="/assets/webg/Object1.webp"
              alt="about us"
              width={180}
              height={180}
            />
            <h4 className={styles.title}>Компьютеры</h4>
            <p className={styles.desc}>
              Обслуживание компьютеров, оргтехники и серверов компаний. А также
              установка лицензионного ПО от Microsoft, Adobe, 1C и других.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/webg/Object2.webp"
              alt="about us"
              width={180}
              height={180}
            />
            <h4 className={styles.title}>Мониторинг</h4>
            <p className={styles.desc}>
              Внедрение круглосуточного мониторинга ИТ-структуры. И организация
              системы резервного копирования.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/webg/Object3.webp"
              alt="about us"
              width={180}
              height={180}
            />
            <h4 className={styles.title}>Видеонаблюдение</h4>
            <p className={styles.desc}>
              Монтаж видеонаблюдения от Hikvision, Dahua, Axis , Трассир и
              Линия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
