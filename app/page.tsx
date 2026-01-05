import styles from "./page.module.css";
import Image from "next/image";
import heroImage from "../public/image.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Venstre kolonne */}
      <div className={styles.left}>
        <p className={styles.bio}>
          Elias Olderbakk is a designer and teacher based in Oslo. 
          He is founding partner of{" "}
          <a href="http://travers.as" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>
            Travers
          </a>
          , and assistant professor at{" "}
          <a href="https://aho.no" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>
            The Oslo School of Architecture and Design
          </a>
          .
        </p>
        
        <nav className={styles.contact}>
          <a href="mailto:elias@olderbakk.no" className={styles.contactRow}>
            <span className={styles.label}>Mail</span>
            <span className={styles.value}>elias@olderbakk.no</span>
          </a>
          <a href="tel:+4793089380" className={styles.contactRow}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>+47 930 89 380</span>
          </a>
        </nav>
      </div>
      
      {/* Høyre kolonne - bilde */}
      <div className={styles.right}>
        <Image
          src={heroImage}
          alt="Foto"
          fill
          className={styles.image}
          placeholder="blur"
          sizes="50vw"
        />
      </div>
    </main>
  );
}
