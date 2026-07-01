import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import WhyBeezips from "@/components/WhyBeezips";
import HowToPurchase from "@/components/HowToPurchase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurStory />
      <WhyBeezips />
      <HowToPurchase />
      <Footer />
    </main>
  );
}
