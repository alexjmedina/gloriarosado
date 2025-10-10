import gloriaPhoto from "@/assets/gloria-rosado-photo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-accent/20 via-primary/10 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <p className="text-sm md:text-base font-heading font-semibold text-muted-foreground mb-2">
                Elect / Élisez
              </p>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-foreground mb-4">
                Gloria Rosado
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-heading font-semibold">
                Westmount City Councillor District 7
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-heading font-semibold">
                Conseillère municipale District 7
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight">
                A practical, inclusive voice for District 7.
              </h2>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent leading-tight">
                Une voix pratique et inclusive pour le district 7.
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-heading font-bold text-secondary">
                Together, Yes We Can
              </p>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                Ensemble, nous pouvons
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-lg shadow-glow"
                asChild
              >
                <a href="#support">Express Support / Soutenir</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-heading font-bold text-lg"
                asChild
              >
                <a href="#about">Learn More / En savoir plus</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={gloriaPhoto}
                alt="Gloria Rosado - Candidate for Westmount District 7 City Councillor"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
