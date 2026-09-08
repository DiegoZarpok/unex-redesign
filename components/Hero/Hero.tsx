"use client";

import { motion } from "framer-motion";
import { TeamCarousel } from "@/components/TeamCarousel/TeamCarousel";

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Sua vaga na Unex está{" "}
            <span className="text-blue-700">mais perto</span> do que você
            imagina
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Vestibular, ENEM ou transferência: escolha a sua forma de
            ingresso e comece a construir o futuro que você quer, em uma das
            quatro unidades da Unex na Bahia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a            
              href="#contato"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors"
            >
              Quero me inscrever
            </a>
            <a            
              href="#cursos"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-700 hover:text-blue-700 transition-colors"
            >
              Ver cursos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <TeamCarousel />
        </motion.div>
      </div>
    </section>
  );
}