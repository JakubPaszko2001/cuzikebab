import HeroSection from "@/components/heroSection";
import GemuseSection from "@/components/GemuseSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GemuseSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
}
