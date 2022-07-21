import Link from "next/link";
import Image from "next/image";
import serverPage from "/public/assets/serverPage.svg";
import styles from "/styles/itoutsource/Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Аренда серверов для 1С в Бишкеке. Бесплатная консультация и
            настройка.
          </h2>
          <Link href="/itoutsource" passHref>
            <a target="_blank" rel="noreferrer" className={styles.button}>
              Перейти на страницу
            </a>
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src={serverPage} alt="itoutsource" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
