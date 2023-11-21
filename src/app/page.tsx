"use client";
import Menu from "@/components/menu/menu";
import styles from "./page.module.scss";
import InfoBar from "@/components/infoBar/infoBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "./config/axios/axios";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const comp1 = document.getElementById("main");
    const comp2 = document.getElementById("about");
    const comp3 = document.getElementById("projects");
    const comp4 = document.getElementById("contact");

    comp1?.addEventListener("mouseover", () => {
      setText("Menu principal do sistema");
    });

    comp2?.addEventListener("mouseover", () => {
      setText("Sobre mim :)");
    });

    comp3?.addEventListener("mouseover", () => {
      setText("Meus projetos");
    });

    comp4?.addEventListener("mouseenter", () => {
      setText("Contato");
      console.log("entrou");
    });
  }, [text]);

  return (
    <main className={styles.main}>
      <div className={styles.divSuperior}>
        <Menu />
      </div>
      <div className={styles.divMeio}></div>
      <InfoBar text={text} />
    </main>
  );
}
