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

  useEffect(() => {
    const posts = axios
      .get(`${instance.defaults.baseURL}/wp-json/wp/v2/posts`)
      .then((res) => {
        res.data.map((post: any, index: any) => {
          const inputString = post.content.rendered;
          // Expressão regular para extrair links de imagens
          const regex = /(?:src|srcset)="([^"]+)"/g;

          // Array para armazenar os links encontrados
          const imageLinks: string[] = [];

          let match: RegExpExecArray | null;
          while ((match = regex.exec(inputString)) !== null) {
            // O primeiro grupo de captura contém o link da imagem (0)
            // O segundo grupo de captura contém o link da imagem em tamanhos diferentes (1)
            if (match[1]) {
              imageLinks.push(match[1]);
            }
          }

          // Exibindo os links encontrados
          console.log(imageLinks);
        });
      });
  }, []);

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
