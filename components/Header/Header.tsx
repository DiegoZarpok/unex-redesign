"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Graduação", href: "#cursos" },
  { label: "Estude na Unex", href: "#hero" },
  { label: "Unidades", href: "#unidades" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Unex
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            
<a
            key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        
<a
          href="#contato"
          className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition-colors"
        >
          Inscreva-se
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="bg-pink-600 text-white text-center px-5 py-2 rounded-full font-medium"
              >
                Inscreva-se
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
