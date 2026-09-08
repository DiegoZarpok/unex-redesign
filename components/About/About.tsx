"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border border-emerald-600 text-emerald-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
            Quem somos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Perto de você, criamos oportunidades que importam.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A Unex nasceu para ficar próxima de quem estuda: quatro cidades
            baianas, professores acessíveis e um jeito de ensinar que coloca
            a prática lado a lado com a teoria desde a primeira semana de
            aula.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Mais do que um diploma, a proposta é te dar experiência real
            antes mesmo de formar — para que o primeiro emprego não seja o
            primeiro contato com a profissão.
          </p>
        </motion.div>
      </div>
    </section>
  );
}