import styles from "../styles/button.module.scss";

export const ButtonBlue = ({ children }) => {
  return (
    <button className={`${styles.button} ${styles.hollow}`}>{children}</button>
  );
};

export const ButtonPurple = ({ children }) => {
  return (
    <button className={`${styles.buttonPurple} ${styles.hollowPurple}`}>
      {children}
    </button>
  );
};
