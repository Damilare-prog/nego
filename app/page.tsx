import AgeGate from "@/app/components/AgeGate";
import Header from "@/app/components/Header";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import TalentSection from "@/app/sections/TalentSection";
import PremiumSection from "@/app/sections/PremiumSection";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Header />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <AboutSection />
        <TalentSection />
        <PremiumSection />
        <Footer />
      </main>
    </>
  );
}
