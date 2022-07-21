import { ButtonPurple } from "../Button";
import Image from "next/image";
import HeroSvg from "/public/assets/HeroImage.svg";
import styles from "/styles/itoutsource/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h1 className={styles.title}>ИТ-обслуживание компаний в Бишкеке</h1>
            <h2 className={styles.subtitle}>
              Системное администрирование, it‑аутсорсинг и удаленная поддержка!
            </h2>
            <ButtonPurple>
              <a
                href="https://wa.me/+996552282553"
                target="_blank"
                rel="noreferrer"
              >
                Получить консультацию
              </a>
            </ButtonPurple>
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
