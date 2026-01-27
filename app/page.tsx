import styles from "./page.module.css";
import Image from "next/image";
import heroImage from "../public/image.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Venstre side - tekst */}
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Elias Olderbakk</h1>
          <p className={styles.subtitle}>
            Designer and teacher based in Oslo. Founding partner of{" "}
            <a href="//travers.as" target="_blank" rel="noopener noreferrer">
              Travers
            </a>
            , assistant professor at{" "}
            <a href="https://aho.no" target="_blank" rel="noopener noreferrer">
              AHO
            </a>
            .
          </p>
        </div>
        
        <footer className={styles.footer}>
          <a href="mailto:elias@olderbakk.no">elias@olderbakk.no</a>
        </footer>
      </div>

      {/* Høyre side - bilde */}
      <div className={styles.imageContainer}>
        <Image
          src={heroImage}
          alt=""
          fill
          className={styles.heroImage}
          placeholder="blur"
          sizes="50vw"
          priority
        />
      </div>
    </main>
  );
}
