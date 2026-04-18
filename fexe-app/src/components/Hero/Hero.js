"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={styles.logoContainer}
                >
                    <div className={styles.glow}></div>
                    <Image
                        src="/fexe-logo-transparent.png"
                        alt="Fexe Logo"
                        width={250}
                        height={250}
                        className={styles.logoImage}
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={styles.title}
                >
                    Creamos tu <span className={styles.gradientText}>Huella Digital</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className={styles.subtitle}
                >
                    Sitios Web, Landing Pages y Catálogos Modernos
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <a href="#contact" className={styles.ctaButton}>Empezar Proyecto</a>
                </motion.div>
            </div>

            <div className={styles.backgroundBeams}></div>
        </section>
    );
};

export default Hero;
