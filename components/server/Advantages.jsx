import Image from "next/image";
import Chips from "../Chips";
import Title from "../Title";
import AdvantagesCard from "./AdvantagesCard";
import Hosting from "/public/assets/Hosting.svg";
import styles from "/styles/server/Advantages.module.scss";

const Advantages = () => {
  const data = [
    {
      id: 2,
      title: "Индивидуальный подход",
      desc: "Поможем с первичной настройкой сервера под ваш тип бизнеса",
    },
    {
      id: 3,
      title: "Специализация и компетенция",
      desc: "Серверы и системное администрирование основная деятельность нашей компании",
    },
    {
      id: 4,
      title: "Гарантия и поддержка",
      desc: "Гарантия и круглосуточная поддержка 24/7",
    },
    {
      id: 5,
      title: "Производительные сервера",
      desc: "Высокая мощность серверов позволит удаленно работать отовсюду",
    },
  ];
  return (
    <section className={styles.container}>
      <Title>Наши преимущества</Title>
      <div className={styles.row}>
        <div className={styles.bigCard}>
          <div className={styles.bigCardInfo}>
            <Chips>01</Chips>
            <h3 className={styles.bigCardTitle}>
              Высокое качество и сбалансированная стоимость:
            </h3>
            <p className={styles.bigCardDesc}>
              Ценим своих клиентов и поэтому используем оборудование и
              комплектующие только тех производителей, качество продукции
              которых не вызывает сомнения и нареканий.
            </p>
          </div>
          <div className={styles.bigCardImgContainer}>
            <Image src={Hosting} alt="serverImage" />
          </div>
        </div>
        <div className={styles.smallCards}>
          {data.map((cardData) => (
            <AdvantagesCard key={cardData.id} cardData={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
