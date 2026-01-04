import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {/* Dekorativ linje */}
        <div className={styles.ornament}>✦</div>
        
        {/* Navn */}
        <h1 className={styles.name}>Olderbakk</h1>
        
        {/* Tittel */}
        <p className={styles.title}>Designer</p>
        
        {/* Skillelinje */}
        <hr className={styles.divider} />
        
        {/* Kort intro */}
        <p className={styles.intro}>
          Skaper visuelle opplevelser med fokus på 
          <br />
          enkelhet, estetikk og funksjon.
        </p>
        
        {/* Kontaktlenker */}
        <nav className={styles.links}>
          <a 
            href="mailto:hei@olderbakk.no" 
            className={styles.link}
          >
            E-post
          </a>
          <span className={styles.separator}>·</span>
          <a 
            href="https://linkedin.com/in/olderbakk" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <span className={styles.separator}>·</span>
          <a 
            href="https://instagram.com/olderbakk" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
        </nav>
      </div>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <p>Oslo, Norge</p>
      </footer>
    </main>
  );
}
