import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Contributions } from "@/components/contributions";
import { About } from "@/components/about";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
