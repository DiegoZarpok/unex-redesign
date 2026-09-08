"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const courses = [
  { icon: "🩺", name: "Medicina", color: "#2563eb", image: "/courses/medicina.jpg", scale: 1.1 },
  { icon: "⚖️", name: "Direito", color: "#FF0000", image: "/courses/direito.jpg", scale: 1.2 },
  { icon: "🦷", name: "Odontologia", color: "#0891b2", image: "/courses/odontologia.jpg", scale: 1.2 },
  { icon: "💉", name: "Enfermagem", color: "#db2777", image: "/courses/enfermagem.jpg", scale: 1.5 },
  { icon: "🐾", name: "Medicina Veterinária", color: "#16a34a", image: "/courses/veterinaria.jpg", scale: 1 },
  { icon: "🏃", name: "Fisioterapia", color: "#ea580c", image: "/courses/fisioterapia.jpg", scale: 1 },
];

export function Courses() {
  return (
    <section id="cursos" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block border border-blue-600 text-blue-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
            Cursos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Escolha o curso que vai te levar mais longe
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.a
              key={course.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ "--course-color": course.color } as React.CSSProperties}
              className="group bg-white rounded-3xl p-6 border-2 border-transparent hover:border-[var(--course-color)] transition-colors"
            >
              <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-white">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                  style={{ transform: `scale(${course.scale})` }}
                />
              </div>

              <span className="mt-4 text-3xl block">{course.icon}</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[var(--course-color)]">
                {course.name}
              </h3>
              <span className="mt-2 inline-block text-sm text-gray-500">
                Saiba mais →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}