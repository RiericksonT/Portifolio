"use client";

import styles from "./projects.module.scss";
import TopBar from "./../../../components/topBar/topBar";
import InfoBar from "./../../../components/infoBar/infoBar";
import Image from "next/image";
import ProjectCard from "@/components/projectCard/projectCard";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  image: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState(Array<ProjectProps>());
  const [itensPerPage, setItensPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [text, setText] = useState("");
  const [srcImage, setSrcImage] = useState("");

  const pages = Math.ceil(projects.length / itensPerPage);
  var meuMap = [];
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = projects.slice(startIndex, endIndex);

  useEffect(() => {
    const meuMap: { [key: string]: HTMLElement } = {};
    currentItens.forEach((item, index) => {
      meuMap[`variavel${index}`] = document.getElementById(`${index}`)!;
      meuMap[`variavel${index}`]?.addEventListener("mouseover", () => {
        setText(item.title);
        setSrcImage(item.image);
      });
    });
    console.log(meuMap);
  }, [currentItens, currentPage]);

  useEffect(() => {
    fetch("https://api.github.com/users/riericksont/repos")
      .then((response) => response.json())
      .then((data) => {
        const projects = data.map((item: any) => {
          return {
            title: item.name,
            image: item.owner.avatar_url,
            link: item.html_url,
          };
        });
        setProjects(projects);
        console.log(projects);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <TopBar text="Escolha um projeto" />
      </div>
      <div className={styles.nameProject}>
        <div className={styles.infoBar}>
          <InfoBar text={text} />
        </div>
        <Image
          src={srcImage}
          width={300}
          height={300}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.menu}>
        <div className={styles.pagination}>
          <button
            value={currentPage}
            onClick={(e) => setCurrentPage(currentPage - 1)}
          >
            L1
          </button>
          <h2 className={styles.menu_title}>Meus Projetos</h2>
          <button
            value={currentPage}
            onClick={(e) => setCurrentPage(currentPage + 1)}
          >
            R1
          </button>
        </div>
        <div className={styles.content}>
          {currentItens.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                title={item.title}
                image={item.image}
                link={item.link}
                id={`${index}`}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.foot}>
        <Link href="/" className={styles.link}>
          <Image src="/backbutton.png" alt="" width={70} height={40} />
          <p>Voltar</p>
        </Link>
      </div>
    </main>
  );
}
