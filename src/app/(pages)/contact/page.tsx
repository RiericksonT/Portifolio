import Link from "next/link";
import styles from "./contact.module.scss";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <p>Aqui estão algumas informações. Não deixe de entrar em contato!</p>
        <p>
          <b>Email:</b> Riericksontorres@gmail.com
        </p>
        <p>
          <b>Telefone:</b> (81)9 8970-0245
        </p>
        <p>
          <b>Github:</b>{" "}
          <a href="https://github.com/RiericksonT">@RiericksonT</a>
        </p>
        <p>
          <b>Linkedin:</b>
          <a href="https://www.linkedin.com/in/rierickson/">@Rierickson</a>
        </p>
      </div>
      <div className={styles.foot}>
        <Link href="/" className={styles.link}>
          <Image src="/backbutton.png" alt="" width={70} height={40} />
          <p>Voltar</p>
        </Link>
      </div>
    </div>
  );
}
