"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/team/diego.jpg",
    message: "Projeto desenvolvido pela matéria de Inteligência Artificial",
  },
  {
    image: "/team/pedro-2.jpg",
    message: "Quer aprender a desenvolver? Faça um curso na FTC",
  },
  {
    image: "/team/alexandre.jpg",
    message: "Tecnologia e prática andando juntas, desde o primeiro semestre",
  },
];

export function TeamCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  function goTo(newIndex: number) {
    setIndex((newIndex + slides.length) % slides.length);
  }

  const current = slides[index];

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-blue-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.message}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 text-white text-lg font-medium leading-snug">
            {current.message}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => goTo(index - 1)}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        ←
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        →
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ver slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}