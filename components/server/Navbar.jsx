import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import styles from "/styles/server/Navbar.module.scss";
import Logo from "/public/assets/logoBlue.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

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
          Тарифы
        </Link>
        <Link className={styles.listItem} href="#contact">
          Контакты
        </Link>
        <Link className={styles.listItem} href="/itoutsource">
          ИТ-Аутсорс
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
