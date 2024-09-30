"use client";
import Menu from "@/components/menu/menu";
import styles from "./page.module.scss";
import InfoBar from "@/components/infoBar/infoBar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { instance } from "./config/axios/axios";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  const audioRef = useRef(null);

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

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
    const audio = audioRef.current as unknown as HTMLAudioElement;
    if (isPlaying && audio) {
      audio.play();
    } else if (audio) {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <main className={styles.main}>
      <div>
        <div>
          {isPlaying ? (
            <button onClick={toggleIsPlaying} className={styles.button}>
              Pause
            </button>
          ) : (
            <button onClick={toggleIsPlaying} className={styles.button}>
              Play
            </button>
          )}
        </div>
        <audio
          src="/music.mp3"
          autoPlay={true}
          ref={audioRef}
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
        />
      </div>
      <div className={styles.divSuperior}>
        <Menu />
      </div>
      <div className={styles.divMeio}></div>
      <InfoBar text={text} />
    </main>
  );
}
