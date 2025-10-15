import { Button } from "./ui/button";
import gloriaBanner from "@/assets/gloria-rosado-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent to-background pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-left space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-black text-secondary leading-tight uppercase" style={{ fontWeight: 900 }}>
                A voice that listens, acts, and delivers for District 7.
              </h1>
            </div>
            
            <p className="text-3xl lg:text-4xl font-heading font-bold text-secondary">
              Together, Yes We Can
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary text-white hover:bg-primary/90 font-bold shadow-glow border-2 border-secondary"
                onClick={() => {
                  const supportSection = document.getElementById('support');
                  supportSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Express your support
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-background font-bold"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={gloriaBanner} 
                alt="Gloria Rosado - Candidate for Westmount District 7 City Councillor" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
