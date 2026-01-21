import styles from "./page.module.css";
import Image from "next/image";
import heroImage from "../public/image.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Fullskjerms bakgrunnsbilde */}
      <Image
        src={heroImage}
        alt=""
        fill
        className={styles.backgroundImage}
        placeholder="blur"
        sizes="100vw"
        priority
      />
      
      {/* Innhold over bildet */}
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
    </main>
  );
}
