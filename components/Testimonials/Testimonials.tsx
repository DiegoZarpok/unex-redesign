"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Diego Barbosa",
    course: "Enfermagem",
    photo: "/testimonials/diego.jpeg",
    quote:
      "Entrei pensando em terminar rápido e arrumar emprego. Não esperava gostar tanto das aulas práticas — foi ali que decidi que Enfermagem era pra mim mesmo, não só um diploma.",
  },
  {
    name: "Pedro Costa",
    course: "Direito",
    photo: "/testimonials/pedro.jpeg",
    quote:
      "Troquei de faculdade no meio do curso e tive medo de perder tempo. Consegui aproveitar quase todas as disciplinas e ainda saí na frente com os projetos que fiz aqui.",
  },
  {
    name: "Alexandre Muniz",
    course: "Odontologia",
    photo: "/testimonials/alexandre.png",
    quote:
      "O que mais gosto é que os professores conhecem a gente pelo nome. Parece bobagem, mas faz diferença quando você tem dúvida e não tem vergonha de perguntar de novo.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block border border-blue-600 text-blue-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
          Depoimentos
        </span>

        <div className="mt-10 min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="border border-gray-200 rounded-3xl p-8"
            >
              <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-blue-600">
                <Image
                  src={current.photo}
                  alt={current.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 font-semibold text-gray-900">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">
                Aluno do curso de {current.course}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}