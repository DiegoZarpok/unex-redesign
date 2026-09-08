import Link from "next/link";

const institutional = [
  { label: "Sobre a Unex", href: "#about" },
  { label: "Unidades", href: "#unidades" },
  { label: "Noticias", href: "#" },
];

const coursesLinks = [
  { label: "Medicina", href: "#cursos" },
  { label: "Direito", href: "#cursos" },
  { label: "Odontologia", href: "#cursos" },
  { label: "Enfermagem", href: "#cursos" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            Unex
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Presente em quatro cidades da Bahia, formando profissionais
            preparados para os desafios reais das suas areas.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Institucional</h4>
          <ul className="mt-4 space-y-2">
            {institutional.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Cursos</h4>
          <ul className="mt-4 space-y-2">
            {coursesLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>0800 710 0070</li>
            <li>contato@unex.edu.br</li>
          </ul>

          <div className="mt-6 flex gap-4">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        (c) {new Date().getFullYear()} Unex. Projeto academico desenvolvido para a disciplina de Inteligencia Artificial.
      </div>
    </footer>
  );
}
