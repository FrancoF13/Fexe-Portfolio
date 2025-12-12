import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Fexe - Web Development Solutions",
  description: "Modern web development, landing pages, and digital catalogs.",
};

import { ThemeProvider } from "@/providers/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
