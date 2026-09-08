"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const campuses = [
  {
    city: "Feira de Santana",
    address: "Feira de Santana, BA",
    photo: "/campuses/feira-de-santana.jpg",
    courses: 9,
  },
  {
    city: "Itabuna",
    address: "Praça José Bastos, 55 - Centro, Itabuna, BA",
    photo: "/campuses/itabuna.jpg",
    courses: 11,
  },
  {
    city: "Jequié",
    address: "Av. Antônia Garcia Ribeiro, 2888 - Jequié, BA",
    photo: "/campuses/jequie.jpg",
    courses: 8,
  },
  {
    city: "Vitória da Conquista",
    address: "Rua Ubaldino Figueira, 200 - Vitória da Conquista, BA",
    photo: "/campuses/vitoria-da-conquista.jpg",
    courses: 11,
  },
];

export function Campuses() {
  const [index, setIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

 useEffect(() => {
  if (showMap) return;

  const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % campuses.length);
  }, 7000);
  return () => clearInterval(timer);
}, [showMap]);

  const current = campuses[index];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    current.address
  )}&output=embed`;

  return (
    <section id="unidades" className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block border border-blue-600 text-blue-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
          Unidades
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Quatro cidades, uma mesma oportunidade
        </h2>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden text-left"
            >
              <div className="relative w-full h-56 bg-gray-100">
                <Image
                  src={current.photo}
                  alt={current.city}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {current.city}
                </h3>
                <p className="mt-1 text-gray-500">{current.address}</p>
                <p className="mt-2 text-sm font-medium text-blue-700">
                  {current.courses} cursos disponíveis
                </p>

                <button
                  onClick={() => setShowMap(!showMap)}
                  className="mt-6 w-full flex items-center justify-between border border-gray-300 rounded-2xl px-5 py-4 hover:border-blue-600 transition-colors"
                >
                  <span className="font-medium text-gray-700">
                    📍 Ver localização
                  </span>
                  <span className="text-gray-400">
                    {showMap ? "▲" : "▼"}
                  </span>
                </button>

                <AnimatePresence>
                  {showMap && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 280, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 rounded-2xl overflow-hidden"
                    >
                      <iframe
                        src={mapSrc}
                        width="100%"
                        height="280"
                        style={{ border: 0 }}
                        loading="lazy"
                        title={`Mapa de ${current.city}`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {campuses.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setShowMap(false);
              }}
              aria-label={`Ver unidade ${i + 1}`}
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