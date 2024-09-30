import React from "react";
import styles from "./menu.module.scss";
import MenuCard from "./../menuCard/menuCard";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.liMain}>
          <Link href="/" id="main" style={{ textDecoration: "none" }}>
            <MenuCard title="Inicio" />
          </Link>
        </li>
        <li className={styles.liAbout}>
          <Link href="/about" id="about" style={{ textDecoration: "none" }}>
            <MenuCard title="Sobre" />
          </Link>
        </li>
        <li className={styles.liProjects}>
          <Link
            href="/projects"
            id="projects"
            style={{ textDecoration: "none" }}
          >
            <MenuCard title="Projetos" />
          </Link>
        </li>
        <li className={styles.liContact}>
          <Link href="/contact" id="contact" style={{ textDecoration: "none" }}>
            <MenuCard title="Contato" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
