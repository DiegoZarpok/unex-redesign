import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unex — Você em evolução | Vestibular, ENEM e Graduação na Bahia",
  description:
    "Conheça a Unex: cursos de Medicina, Direito, Odontologia e mais, em quatro cidades da Bahia. Inscreva-se no vestibular, ENEM ou transferência externa.",
  keywords: [
    "Unex",
    "vestibular",
    "graduação Bahia",
    "faculdade de medicina",
    "ENEM",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}