import AboutMeSection from "./components/home/about-me";
import HeroSection from "./components/home/hero";
import ServicesSection from "./components/home/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
    </main>
  );
}
