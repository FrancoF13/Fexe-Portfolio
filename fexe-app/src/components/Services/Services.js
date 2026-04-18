"use client";
import { motion } from "framer-motion";
import { Globe, Layout, Smartphone, PenTool } from "lucide-react";
import Image from "next/image";

import styles from "./Services.module.css";

const services = [
    {
        icon: <Layout size={32} />,
        title: "Landing Pages",
        description: "Páginas de alto impacto diseñadas para convertir visitantes en clientes.",
        projects: [
            {
                video: "/Videos/LandingPage1.mp4",
                title: "Landing Page 1",
                link: "https://portafolio-rebeca.vercel.app/"
            },
            {
                video: "/Videos/LandingPage2.mp4",
                title: "Landing Page 2",
                link: "/"
            }
        ],
        featured: true
    },
    {
        icon: <Globe size={32} />,
        title: "Catálogos Digitales",
        description: "Exhiba sus productos con elegancia y funcionalidad en cualquier dispositivo.",
        projects: [
            {
                video: "/Videos/Catalogo1.mp4",
                title: "Catálogo 1",
                link: "https://pulseras-rebe.vercel.app/"
            },
            {
                video: "/Videos/catalogo2.mp4",
                title: "Catálogo 2",
                link: "https://app-de-pomodoro.vercel.app/"
            },
            {
                video: "/Videos/catalogo3.webm",
                title: "Catálogo 3",
                link: "/"
            },
            {
                video: "/Videos/catalogo4.webm",
                title: "Catálogo 4",
                link: "/"
            }
        ],
        featured: true
    },
    {
        icon: <Smartphone size={32} />,
        title: "Sitios Institucionales",
        description: "Fortalezca su presencia corporativa con un sitio web profesional y confiable.",
        projects: [
            {
                video: "/Videos/Institucional1.mp4",
                title: "Sitio 1",
                link: "https://seminario-gray.vercel.app/"
            },
            {
                video: "/Videos/Institucional2.mp4",
                title: "Sitio 2",
                link: "https://www.institutonuevosiglo.com.ar/"
            }
        ],
        featured: true
    },
    {
        icon: <PenTool size={32} />,
        title: "Mantenimiento Web",
        description: "Mantenga su sitio seguro, actualizado y funcionando a la perfección.",
        featured: false
    },
    {
        icon: <Smartphone size={32} />,
        title: "Sitios Responsives",
        description: "Experiencias fluidas que se adaptan a todos los dispositivos.",
        featured: false
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

const Services = () => {
    // Separate services
    const featuredServices = services.filter(s => s.featured);
    const secondaryServices = services.filter(s => !s.featured);

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                {/* Header removed as requested */}

                {/* Featured Services - Rows */}
                <div className={styles.featuredRows}>
                    {featuredServices.map((service, i) => (
                        <motion.div
                            key={i}
                            className={styles.serviceRow}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className={styles.rowContent}>
                                <div className={styles.iconWrapperRow}>{service.icon}</div>
                                <h3 className={styles.rowTitle}>{service.title}</h3>
                                <p className={styles.rowDescription}>{service.description}</p>
                            </div>

                            <div className={styles.projectsGrid}>
                                {service.projects.map((project, idx) => {
                                    const Content = () => (
                                        <>
                                            {project.video ? (
                                                <video
                                                    src={project.video}
                                                    className={styles.projectImage}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "100%",
                                                        height: "100%",
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0
                                                    }}
                                                />
                                            ) : (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className={styles.projectImage}
                                                />
                                            )}
                                        </>
                                    );

                                    return (
                                        <div key={idx} className={styles.projectCard}>
                                            <div className={styles.projectImageContainer}>
                                                {project.link ? (
                                                    <a href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                                                        <Content />
                                                    </a>
                                                ) : (
                                                    <Content />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Services - Grid */}
                {secondaryServices.length > 0 && (
                    <div className={styles.secondaryGrid}>
                        {secondaryServices.map((service, i) => (
                            <motion.div
                                key={i}
                                className={styles.secondaryCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            >
                                <div className={styles.secondaryIcon}>{service.icon}</div>
                                <div>
                                    <h4 className={styles.secondaryTitle}>{service.title}</h4>
                                    <p className={styles.secondaryDescription}>{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
