import styles from "./topBar.module.scss";

interface topBarProps {
  text: string;
}

const topBar: React.FC<topBarProps> = ({ text }) => {
  return (
    <div className={styles.div}>
      <footer className={styles.footer}>
        <p>{text}</p>
      </footer>
    </div>
  );
};

export default topBar;
