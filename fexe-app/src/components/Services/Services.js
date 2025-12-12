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
            { image: "/images/services/landing-page.png", title: "Landing Page 1" },
            { image: "/images/services/landing-page.png", title: "Landing Page 2" } // Reusing for now
        ],
        featured: true
    },
    {
        icon: <Globe size={32} />,
        title: "Catálogos Digitales",
        description: "Exhiba sus productos con elegancia y funcionalidad en cualquier dispositivo.",
        projects: [
            { image: "/images/services/catalog.png", title: "Catálogo 1" },
            { image: "/images/services/catalog.png", title: "Catálogo 2" }
        ],
        featured: true
    },
    {
        icon: <Smartphone size={32} />,
        title: "Sitios Institucionales",
        description: "Fortalezca su presencia corporativa con un sitio web profesional y confiable.",
        projects: [
            { image: "/images/services/institutional.png", title: "Sitio 1" },
            { image: "/images/services/institutional.png", title: "Sitio 2" }
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
                                {service.projects.map((project, idx) => (
                                    <div key={idx} className={styles.projectCard}>
                                        <div className={styles.projectImageContainer}>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className={styles.projectImage}
                                            />
                                        </div>
                                    </div>
                                ))}
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
