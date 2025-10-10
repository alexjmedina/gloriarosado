import districtMap from "@/assets/district-7-map.jpg";

const DistrictMap = () => {
  return (
    <section id="district" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Westmount District 7
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Your neighborhood / Votre quartier
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border">
            <img
              src={districtMap}
              alt="Map of Westmount District 7 showing the boundaries and streets"
              className="w-full h-auto"
            />
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-xl border-l-4 border-primary">
            <p className="text-lg text-foreground mb-2">
              <strong>District 7</strong> encompasses the vibrant neighborhoods between Districts 5 and the eastern border, including beautiful streets and community spaces that make Westmount unique.
            </p>
            <p className="text-lg text-muted-foreground italic">
              Le <strong>District 7</strong> comprend les quartiers dynamiques entre les districts 5 et la limite est, incluant de belles rues et espaces communautaires qui rendent Westmount unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistrictMap;
