import Image from "next/image";
import Resp from "/public/assets/Resp.svg";
import styles from "/styles/server/Responsibility.module.scss";

const Responsibility = () => {
  const data = [
    {
      id: 1,
      text: "Система регламентных операций",
      icon: "/assets/iconList.svg",
    },
    {
      id: 2,
      text: "Схема действий в форс-мажорных ситуациях",
      icon: "/assets/iconFire.svg",
    },
    {
      id: 3,
      text: "Круглосуточный мониторинг системы",
      icon: "/assets/iconTime.svg",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.imgContainer}>
          <Image src={Resp} alt="serverImage" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Несём ответственность за ваши данные</h2>
          {data.map((item) => (
            <div className={styles.bullets} key={item.id}>
              <Image src={item.icon} alt="icon" width="32px" height="32px" />
              <h5 className={styles.text}>{item.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
