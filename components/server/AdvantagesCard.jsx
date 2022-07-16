import Chips from "../Chips";
import styles from "/styles/server/AdvantagesCard.module.scss";

const AdvantagesCard = ({ cardData }) => {
  return (
    <div className={styles.container}>
      <Chips>{cardData.id}</Chips>
      <h3 className={styles.title}>{cardData.title}</h3>
      <p className={styles.desc}>{cardData.desc}</p>
    </div>
  );
};

export default AdvantagesCard;
