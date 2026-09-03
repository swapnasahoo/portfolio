import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Contributions } from "@/components/contributions";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Contributions />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
