"use client";
import { Instagram, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    {/* Brand Column (Left) */}
                    <div className={styles.brandColumn}>
                        <h2 className={styles.logo}>FEXE</h2>
                        <p className={styles.tagline}>Soluciones digitales a medida.</p>
                    </div>

                    {/* Links Column (Center) */}
                    <div className={styles.linksColumn}>
                        <h3 className={styles.linkTitle}>Contacto Directo</h3>
                        <div className={styles.links}>
                            <a href="mailto:fexe.dev@gmail.com" className={styles.link}>fexe.dev@gmail.com</a>
                            <a href="https://www.instagram.com/fexe.dev/" target="_blank" rel="noopener noreferrer" className={styles.link}>@Fexe</a>
                        </div>
                    </div>

                    {/* Socials Column (Right) */}
                    <div className={styles.socialsColumn}>
                        <h3 className={styles.linkTitle}>Síguenos</h3>
                        <div className={styles.iconRow}>
                            <a href="https://www.instagram.com/fexe.dev/" target="_blank" className={styles.icon} aria-label="Instagram"><Instagram size={24} /></a>
                            <a href="https://www.linkedin.com/in/francofernandez13/" target="_blank" className={styles.icon} aria-label="LinkedIn"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>
            </div>
        </footer>
    );
};

export default Footer;
