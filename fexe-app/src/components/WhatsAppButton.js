"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/543794009028?text=realizemos%20mi%20pagina%20web"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                backgroundColor: "#25D366",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                zIndex: 1000,
                cursor: "pointer",
                textDecoration: "none"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle size={32} strokeWidth={2.5} />
        </motion.a>
    );
};

export default WhatsAppButton;
