import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Priorities from "@/components/Priorities";
import DistrictMap from "@/components/DistrictMap";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Priorities />
        <DistrictMap />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
