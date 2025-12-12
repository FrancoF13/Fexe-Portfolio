"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import styles from "./Navbar.module.css";
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#home" },
        { name: "Servicios", href: "#services" },
        { name: "Nosotros", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    if (!mounted) return null;

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/fexe-logo-combined.jpg"
                            alt="FEXE"
                            width={120}
                            height={50}
                            className={styles.logoImage}
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <Link href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle Theme"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Controls & Menu (unchanged for now, just wrapped in nav) */}
                <div className={styles.mobileControls}>
                    <button onClick={toggleTheme} className={styles.themeToggleMobile} aria-label="Toggle Theme">
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileMenu}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
