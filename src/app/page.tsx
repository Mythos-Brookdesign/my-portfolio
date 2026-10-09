import { AskCv } from "@/components/AskCv";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Blog, Contact, Experience, Footer, Projects, Stack } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AskCv />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
