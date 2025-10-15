const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary">
              About Gloria Rosado
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground animate-fade-in">
            <p className="text-lg leading-relaxed text-white">
              My name is Gloria Rosado, a proud Canadian immigrant mother and long-time Westmount resident.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              I made Westmount my home more than fifteen years ago and raised my son here — he studied at Saint-Léon de Westmount, where I also had the privilege of serving as a member of the Conseil d'établissement. Those years deepened my understanding of how our schools, families, and community come together to shape the next generation.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              I have built many friendships and have had the pleasure to assist my neighbours find a stronger voice in the decision making process that shapes our community.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              As your District 7 candidate, I'm not here to make promises — I'm here to work with you to deliver practical solutions that improve our daily lives.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              My experience includes tourism, and UNESCO World Heritage Cities coordination work.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              Throughout my career, I have focused on urban cleanliness, sustainable development, and community participation. These are lessons that now guide my approach to keeping Westmount safe, clean, and beautiful, while preserving what makes each neighbourhood unique.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              My professional career includes work at ICAO, the International Civil Aviation Organization in Montréal, and the MUHC.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              In Montréal, I serve as President of 50 + 1 Canada and Vice-President of Fusion Québec, organizations that empower women and newcomers through leadership, language, and civic engagement.
            </p>
            
            <p className="text-lg leading-relaxed text-secondary font-semibold">
              I know what it means to build bridges between people and ideas — and now I'm ready to do it for the community I call home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
