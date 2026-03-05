import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShopifyStack from "@/components/ShopifyStack";
import WhoIServe from "@/components/WhoIServe";
import PastWork from "@/components/PastWork";
import About from "@/components/About";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <ShopifyStack />
      <WhoIServe />
      <PastWork />
      <About />
      <IntakeForm />
      <Footer />
    </main>
  );
}
