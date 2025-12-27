"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        phone: "",
        project: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, project } = formData;
        const message = `Hola, soy ${name}. Mi teléfono es ${phone}. Me gustaría contarte sobre mi proyecto: ${project}`;
        const whatsappUrl = `https://wa.me/543794009028?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Hablemos de tu Proyecto</h2>
                    <p className={styles.subtitle}>
                        ¿Tienes una idea en mente? Estamos listos para hacerla realidad.
                    </p>
                </motion.div>

                <div className={styles.contentWrapper}>
                    {/* Contact Form */}
                    <motion.div
                        className={styles.formContainer}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Tu número de teléfono"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Cuéntanos sobre tu proyecto</label>
                                <textarea
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Detalles del proyecto..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Enviar a WhatsApp <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className={styles.infoContainer}>
                        <motion.div
                            className={styles.infoItem}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className={styles.iconWrapper}>
                                <MessageCircle size={32} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3>WhatsApp / Teléfono</h3>
                                <p>Estamos disponibles para una charla rápida.</p>
                                <a href="https://wa.me/543794009028?text=realizemos%20mi%20pagina%20web" target="_blank" className={styles.contactLink}>
                                    +54 379 400-9028
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.infoItem}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Mail size={32} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3>Email</h3>
                                <p>Envíanos un correo con los detalles.</p>
                                <a href="mailto:fexe.dev@gmail.com" className={styles.contactLink}>
                                    fexe.dev@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.infoItem}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <MapPin size={32} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3>Ubicación</h3>
                                <p>Servicios digitales para todo el mundo.</p>
                                <span className={styles.contactLink}>
                                    Argentina, Corrientes
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
