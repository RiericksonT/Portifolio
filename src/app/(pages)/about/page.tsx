import { Table, TableHorizontal } from "@/components/table/table";
import styles from "./about.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.myInfos}>
        <Image src="/me.png" alt="" width={600} height={600} />
        <Table
          caption={"Quem sou?"}
          columns={["Nome", "Idade", "Sobre mim", "Função"]}
          data={[
            "Kaique Rierickson Torres",
            "22",
            "Eu sou um engenheiro de software com 1 ano de experiência e apaixonado por dev e ops. Tive a oportunidade de experimentar a base de desenvolvimento de software em linguagens como C#, Java e Typescript!",
            "Fullstack Developer",
          ]}
        />
      </div>
      <div className={styles.mySkills}>
        <Table
          caption={"My Skills"}
          columns={[
            "React",
            "Next",
            "Node",
            "TypeScript",
            "HTML",
            "CSS",
            "SASS",
            "CI/CD",
            "Git",
            "Docker",
            "Kubernetes",
            "Linux",
            "Azure",
            "Java",
            "SpringBoot",
            "PostgreSQL",
            "Python",
            "C#",
            "Flutter",
          ]}
          data={[
            "80",
            "86",
            "90",
            "90",
            "85",
            "80",
            "80",
            "85",
            "98",
            "90",
            "75",
            "70",
            "85",
            "75",
            "75",
            "80",
            "75",
            "70",
            "67",
          ]}
        />
        <div className={styles.foot}>
          <Link href="/" className={styles.link}>
            <Image src="/backbutton.png" alt="" width={70} height={40} />
            <p>Voltar</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
