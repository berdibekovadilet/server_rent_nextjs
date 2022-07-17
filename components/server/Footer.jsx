import Link from "next/link";
import Image from "next/image";
import ITOut from "/public/assets/ITOut.svg";
import styles from "/styles/server/Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            ИТ-аутсорс и приходящий системный администратор в Бишкеке
          </h2>
          <Link href="/itoutsource" passHref>
            <a target="_blank" rel="noreferrer" className={styles.button}>
              Перейти на страницу
            </a>
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src={ITOut} alt="itoutsource" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
