import Title from "../Title";
import SocialCard from "./SocialCard";
import styles from "/styles/itoutsource/Contact.module.scss";

const Contact = () => {
  const data = [
    {
      id: 1,
      icon: "/assets/iconTelepone.svg",
      text: "Позвонить (0552) 282-553",
      link: "tel:+996552282553",
    },
    {
      id: 2,
      icon: "/assets/iconWhatsapp.svg",
      text: "Написать в Whta’sApp",
      link: "https://wa.me/+996552282553",
    },
    {
      id: 3,
      icon: "/assets/iconInstagram.svg",
      text: "Перейти в Instagram",
      link: "https://www.instagram.com/helpdesk.kg/",
    },
  ];
  return (
    <section className={styles.container} id="contact">
      <div className={styles.row}>
        <Title>Мы всегда на связи</Title>
        <div className={styles.socialContainer}>
          {data.map((dataCard) => (
            <SocialCard key={dataCard.id} dataCard={dataCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
