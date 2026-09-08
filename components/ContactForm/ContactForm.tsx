"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const courseOptions = [
  "Medicina",
  "Direito",
  "Odontologia",
  "Enfermagem",
  "Medicina Veterinária",
  "Fisioterapia",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-20 px-6 bg-gray-100">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <span className="inline-block border border-pink-600 text-pink-700 font-semibold uppercase text-sm tracking-wide px-4 py-1 rounded-full">
            Contato
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Dá o primeiro passo agora
          </h2>
          <p className="mt-3 text-gray-600">
            Deixe seus dados que a nossa equipe entra em contato com você.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-white rounded-3xl border border-gray-200 p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-4xl">✅</span>
              <p className="mt-4 text-lg font-semibold text-gray-900">
                Recebemos seus dados!
              </p>
              <p className="mt-2 text-gray-600">
                Em breve, nossa equipe vai entrar em contato com você.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Curso de interesse
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="">Selecione um curso</option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition-colors"
              >
                Quero me inscrever
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}