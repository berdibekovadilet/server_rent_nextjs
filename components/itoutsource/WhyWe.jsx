import Title from "../Title";
import WhyWeCard from "./WhyWeCard";
import styles from "/styles/itoutsource/WhyWe.module.scss";

const WhyWe = () => {
  const data = [
    {
      id: 1,
      image: "/assets/spacePurple.svg",
      title: "Оперативность",
      desc: "Оперативно реагируем на Ваши запросы и в кратчайшие сроки решаем возникающие проблемы",
    },
    {
      id: 2,
      image: "/assets/goldPurple.svg",
      title: "Экономичность",
      desc: "Снижаем Ваши затраты на содержание штата техподдержки и приобретение техники",
    },
    {
      id: 3,
      image: "/assets/maintenancePurple.svg",
      title: "Спокойствие",
      desc: "Берем на себя все заботы по IT‑поддержке Вашей компании. Несем полную ответственность",
    },
  ];
  return (
    <section className={styles.container}>
      <Title>Почему выбирают нас</Title>
      <div className={styles.row}>
        {data.map((cardData) => (
          <WhyWeCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </section>
  );
};
export default WhyWe;
