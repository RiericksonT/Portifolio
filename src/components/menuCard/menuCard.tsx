import React from "react";
import styles from "./menuCard.module.scss";

interface MenuCardProps {
  title: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title }) => {
  return (
    <div className={styles.menu_card}>
      <h2 className={styles.menu_title}>{title}</h2>
    </div>
  );
};

export default MenuCard;
