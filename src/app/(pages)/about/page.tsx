import { Table, TableHorizontal } from "@/components/table/table";
import styles from "./about.module.scss";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.myInfos}>
        <Table
          caption={"Who I am?"}
          columns={["name", "age", "email", "phone", "role"]}
          data={[
            "Kaique Rierickson Torres",
            "21",
            "riericksontorres@gmail.com",
            "(81) 9 8970-0245",
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
          ]}
          data={[
            "79",
            "80",
            "88",
            "88",
            "82",
            "77",
            "77",
            "99",
            "97",
            "96",
            "85",
            "69",
            "81",
            "75",
            "75",
            "75",
            "68",
          ]}
        />
      </div>
    </main>
  );
}
