import styles from "/styles/chips.module.scss";

const Chips = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Chips;
