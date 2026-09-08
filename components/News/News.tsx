"use client";

import { motion } from "framer-motion";

const news = [
  {
    tag: "Empregabilidade",
    title: "Alunos do 5º semestre já fecham estágio antes de formar",
    excerpt:
      "Parcerias com clínicas e escritórios da região abrem espaço para quem ainda está na graduação.",
    date: "15 ago 2026",
  },
  {
    tag: "Eventos",
    title: "Semana de Saúde Mental reúne mais de 500 pessoas nos 4 campi",
    excerpt:
      "Atividade gratuita e aberta à comunidade contou com rodas de conversa e atendimento psicológico.",
    date: "02 ago 2026",
  },
  {
    tag: "Acadêmico",
    title: "Alunos inovam com landing page para curso de Inteligência Artificial",
    excerpt:
      "Os estudantes Diego Barbosa, Pedro Costa e Alexandre Muniz desenvolveram uma landing page criativa e profissional para divulgar o curso de Inteligência Artificial, unindo tecnologia e design em um projeto de extensão que valoriza a inovação acadêmica.",
    date: "20 jul 2026",
  },
];

export function News() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block border border-blue-600 text-blue-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
            Notícias
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            O que está acontecendo na Unex
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-gray-50 rounded-3xl p-6 border border-gray-200 hover:border-blue-600 transition-colors flex flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {item.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                {item.excerpt}
              </p>
              <p className="mt-4 text-xs text-gray-400">{item.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}