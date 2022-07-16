import styles from "../styles/button.module.scss";

const Button = ({ children }) => {
  return (
    <button className={`${styles.button} ${styles.hollow} `}>{children}</button>
  );
};

export default Button;
