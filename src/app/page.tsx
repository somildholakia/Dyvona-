import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Journal } from "@/components/Journal";
import { Navbar } from "@/components/Navbar";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Journal />
        <Principles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
