import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import styles from "/styles/itoutsource/Navbar.module.scss";
import Logo from "/public/assets/logoPurple.svg";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const showNavbar = () => {
    isOpen && setIsOpen(false);
    !isOpen && setIsOpen(true);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" />
        <h3>Helpdesk</h3>
      </div>

      <nav
        className={`${
          isOpen ? styles.menuList : `${styles.menuList} ${styles.menuListOpen}`
        } `}
      >
        <Link className={styles.listItem} href="#tarif">
          <button onClick={() => setIsOpen(true)}>Услуги</button>
        </Link>
        <Link className={styles.listItem} href="#contact">
          <button onClick={() => setIsOpen(true)}>Контакты</button>
        </Link>
        <Link className={styles.listItem} href="/">
          Аренда серверов
        </Link>
        <a href="tel:+996552282553">
          <button className={styles.button}>(0552) 282-553</button>
        </a>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>

      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
