import Image from "next/image";
import styles from "/styles/server/SocialCard.module.scss";
const SocialCard = ({ dataCard }) => {
  return (
    <>
      <a href={dataCard.link} target="_blank" rel="noreferrer noopener">
        <div className={styles.wrapper}>
          <Image src={dataCard.icon} alt="icon" width="38" height="38" />
          <p>{dataCard.text}</p>
        </div>
      </a>
    </>
  );
};

export default SocialCard;
