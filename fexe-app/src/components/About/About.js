"use client";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
    const values = [
        {
            icon: <Lightbulb size={32} />,
            title: "Innovación",
            description: "Creemos en desafiar lo convencional para ofrecer soluciones digitales únicas y memorables."
        },
        {
            icon: <Target size={32} />,
            title: "Resultados",
            description: "Nuestro enfoque está siempre en generar un impacto real y medible para tu negocio."
        },
        {
            icon: <Users size={32} />,
            title: "Cercanía",
            description: "Trabajamos codo a codo contigo, entendiendo tus necesidades como si fueran las nuestras."
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Sobre Nosotros</h2>
                    <p className={styles.subtitle}>
                        En FEXE combinamos creatividad, tecnología y estrategia para construir el futuro digital de nuestros clientes.
                        No solo hacemos sitios web, creamos experiencias.
                    </p>
                </motion.div>

                <div className={styles.contentWrapper}>
                    {/* Image Column */}
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imageWrapper}>
                            {/* Assuming the image is named profile.jpg in public/images */}
                            <img
                                src="/images/profile.jpg"
                                alt="Franco - FEXE Founder"
                                className={styles.profileImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </motion.div>

                    {/* Values Column */}
                    <div className={styles.grid}>
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                className={styles.card}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <div className={styles.iconWrapper}>{value.icon}</div>
                                <h3 className={styles.cardTitle}>{value.title}</h3>
                                <p className={styles.cardDescription}>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;
