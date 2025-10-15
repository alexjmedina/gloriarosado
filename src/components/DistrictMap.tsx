import districtMap from "@/assets/district-7-map.jpg";

const DistrictMap = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary">
              Westmount District 7
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg leading-relaxed text-foreground">
                District 7 is a vibrant community in the heart of Westmount, home to families, professionals, and long-time residents who value safety, cleanliness, and quality of life.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                Le District 7 est une communauté dynamique au cœur de Westmount, abritant des familles, des professionnels et des résidents de longue date qui valorisent la sécurité, la propreté et la qualité de vie.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                As your councillor, I will work to ensure our streets are safer, our public spaces are cleaner, and our community voice is stronger.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                En tant que votre conseillère, je travaillerai pour que nos rues soient plus sûres, nos espaces publics plus propres et la voix de notre communauté plus forte.
              </p>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/30">
                <img 
                  src={districtMap} 
                  alt="Westmount District 7 Map" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistrictMap;
