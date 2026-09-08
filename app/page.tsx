import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Courses } from "@/components/Courses/Courses";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Campuses } from "@/components/Campuses/Campuses";
import { News } from "@/components/News/News";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Campuses />
      <News />
      <ContactForm />
      <Footer />
    </main>
  );
}