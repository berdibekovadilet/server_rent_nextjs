import Button from "../Button";
import Image from "next/image";
import HeroSvg from "/public/assets/HeroImageServer.svg";
import styles from "../../styles/server/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h1 className={styles.title}>Аренда серверов для 1С в Бишкеке</h1>
            <h2 className={styles.subtitle}>
              Аренда серверов на базе Intel в Бишкеке. Бесплатная консультация и
              настройка сервера. Идеально для компаний которые работают на 1С.
            </h2>
            <Button>
              <a
                href="https://wa.me/+996552282553"
                target="_blank"
                rel="noreferrer"
              >
                Получить консультацию
              </a>
            </Button>
          </div>
          <div className={styles.imageContainer}>
            <Image src={HeroSvg} alt="serverImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
