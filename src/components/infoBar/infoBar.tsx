import styles from "./infoBar.module.scss";

interface InfoBarProps {
  text: string;
}

const infoBar: React.FC<InfoBarProps> = ({ text }) => {
  return (
    <footer className={styles.footer}>
      <p>{text}</p>
    </footer>
  );
};

export default infoBar;
