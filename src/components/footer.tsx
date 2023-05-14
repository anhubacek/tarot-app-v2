

import styles from "../styles/footer.module.scss"
import linkedin from "../assets/linkedin.png"
import site from "../assets/sitio-web.png"

export default function Footer() {
   
    return(
        <footer className={styles.footer}>
            
            <span className={styles.creator}>Diseño y Desarrollo Web - Andrea Hubacek</span>
            <a href="https://www.linkedin.com/in/andreahubacek/" target="_blank"> <img className={styles.icon} src={linkedin.src} /></a>
            <a href="https://andreahubacek.vercel.app/" target="_blank"><img className={styles.icon} src={site.src} /></a>
            <br></br>
            <span className={styles.creator}>Créditos de la API - Ángel Scutari</span>
            <a href="https://www.linkedin.com/in/angel-scutari/" target="_blank"> <img className={styles.icon} src={linkedin.src} /></a>
       </footer>
    )
}