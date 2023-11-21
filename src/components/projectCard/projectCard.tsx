import React from "react";
import styles from "./projectCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  id,
}) => {
  return (
    <Link href={link} style={{ textDecoration: "none" }} id={id}>
      <div className={styles.project_card}>
        <Image
          src={image}
          width={150}
          height={150}
          alt=""
          className={styles.image}
        />
        <h2 className={styles.menu_title}>{title}</h2>
      </div>
    </Link>
  );
};

export default ProjectCard;
