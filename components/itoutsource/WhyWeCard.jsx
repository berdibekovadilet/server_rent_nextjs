import Image from "next/image";
import styles from "/styles/itoutsource/WhyWeCard.module.scss";

const WhyWeCard = ({ cardData }) => {
  return (
    <div className={styles.container}>
      <Image
        src={cardData.image}
        alt={cardData.title}
        width="140px"
        height="140px"
      />
      <h3 className={styles.title}>{cardData.title}</h3>
      <p className={styles.desc}>{cardData.desc}</p>
    </div>
  );
};

export default WhyWeCard;
